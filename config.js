module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        SECRET: process.env.SECRET || 'secreto'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'CaramitiE.23',
        database: process.env.MYSQL_DB || 'prueba_db'
    }
}