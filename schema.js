const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLInputObjectType
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
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
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_flight: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt },
    success_rate_pct: { type: GraphQLInt }
  })
});

const RocketTypeResponse = new GraphQLObjectType({
  name: 'RocketTypeResponse',
  fields: () => ({
    records: { type: GraphQLList(RocketType) },
    count: { type: GraphQLInt }
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
        flight_number: { type: GraphQLInt }
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
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});