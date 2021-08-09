const redis = require ('redis')
const config = require('../config')

const client = redis.RedisClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password
})

function list(table) {
    return new Promise((resolve, reject) => {
        client.get(table, (err, data) => {
            if(err) return reject(err)
            
            let res = data || null
            if(data) {
                res = JSON.stringify(data)
            }
            resolve(data)
        })
    })
}


function get(table, id) {

}

function upsert(table, data) {
    let key = table
    if(data && data.id) {
        key = data + '_' + data.id        
    }
    client.setex(key, 10, JSON.stringify(data))
}

module.exports = {
    list,
    get,
    upsert
}