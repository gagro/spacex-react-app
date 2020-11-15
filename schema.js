const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    mission_name: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
    launch_site: { type: LaunchSiteType },
    links: { type: LinksType }
  })
});

const LaunchSiteType = new GraphQLObjectType({
  name: 'LaunchSite',
  fields: () => ({
    site_name: { type: GraphQLString }
  })
});

const LinksType = new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    wikipedia: { type: GraphQLString },
    video_link: { type: GraphQLString },
    mission_patch_small: { type: GraphQLString }
  })
});

const LaunchTypeResponse = new GraphQLObjectType({
  name: 'LaunchTypeResponse',
  fields: () => ({
    records: { type: GraphQLList(LaunchType) },
    count: { type: GraphQLInt }
  })
});

// Mission Type
const MissionType = new GraphQLObjectType({
  name: 'Mission',
  fields: () => ({
    mission_name: { type: GraphQLString },
    mission_id: { type: GraphQLString },
    manufacturers: { type: GraphQLList(GraphQLString) },
    wikipedia: { type: GraphQLString },
    website: { type: GraphQLString },
    twitter: { type: GraphQLString },
  })
})

const MissionTypeResponse = new GraphQLObjectType({
  name: 'MissionTypeResponse',
  fields: () => ({
    records: { type: GraphQLList(MissionType) },
    count: { type: GraphQLInt }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_flight: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt },
    success_rate_pct: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    company: { type: GraphQLString },
    height: { type: GraphQLString },
    mass: { type: GraphQLString },
    diameter: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
  })
});

const RocketTypeResponse = new GraphQLObjectType({
  name: 'RocketTypeResponse',
  fields: () => ({
    records: { type: GraphQLList(RocketType) },
    count: { type: GraphQLInt }
  })
});

const Latest = new GraphQLObjectType({
  name: 'Latest',
  fields: () => ({
    launch: { type: LaunchType },
    rocket: { type: RocketType }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: LaunchTypeResponse,
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches?limit=${args.limit}&offset=${args.offset}`)
          .then(res => ({ records: res.data, count: res.headers["spacex-api-count"] }))
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data);
      }
    },
    missions: {
      type: MissionTypeResponse,
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/missions?limit=${args.limit}&offset=${args.offset}`)
          .then(res => ({ records: res.data, count: res.headers["spacex-api-count"] }))
      },
    },
    mission: {
      type: MissionType,
      args: {
        mission_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/missions/${args.mission_id}`)
          .then(res => res.data)
      },
    },
    latest: {
      type: Latest,
      resolve() {
        const launchRequest = axios.get("https://api.spacexdata.com/v3/launches");
        const rocketRequest = axios.get("https://api.spacexdata.com/v3/rockets");

        return axios.all([launchRequest, rocketRequest]).then(axios.spread((...responses) => {
          const highestSuccessRate = Math.max.apply(Math, responses[1].data.map(item => item.success_rate_pct));
          const latestLaunch = responses[0].data.sort((a, b) => new Date(b.launch_date_local) - new Date(a.launch_date_local));
          const rocket = responses[1].data.find(item => item.success_rate_pct === highestSuccessRate);

          return ({
            launch: latestLaunch[0], rocket: { ...rocket, height: rocket.height.meters, diameter: rocket.diameter.meters, mass: rocket.mass.kg }
          })
        }))
      },
    },
    rockets: {
      type: RocketTypeResponse,
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets?limit=${args.limit}&offset=${args.offset}`)
          .then(res => ({ records: res.data, count: res.headers["spacex-api-count"] }))
      },
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(res => res.data)
      },
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});