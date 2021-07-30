module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        SECRET: process.env.SECRET || 'secreto'
    }
}