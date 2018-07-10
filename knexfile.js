// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/g-memory-1'
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'

  }
};
