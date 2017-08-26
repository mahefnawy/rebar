// @flow

import cassandraDriver from "cassandra-driver"

// Read environment
require( "dotenv" ).load()

const CassandraOptions = {
  // Assume localhost if not defined
  contactPoints:
    process.env.CASSANDRA_CONNECTION_POINTS != null
      ? process.env.CASSANDRA_CONNECTION_POINTS.split( "," )
      : [ "localhost" ],
  keyspace: process.env.CASSANDRA_KEYSPACE,
  authProvider: null
}

if ( process.env.CASSANDRA_USER ) {
  CassandraOptions.authProvider = new cassandraDriver.auth
    .PlainTextAuthProvider(
    process.env.CASSANDRA_USER,
    process.env.CASSANDRA_PASSWORD
  )
}

export default CassandraOptions
