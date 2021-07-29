const { nanoid } = require('nanoid')
const auth = require('../auth')

const TABLA = 'user'

module.exports = function (injectedStore) {
    let store = injectedStore
    if(!store) {
        store = require('../../../store/dummy')
    }
    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.list(TABLA, id)
    }

    async function upsert(data) {
        const user = {
            name: data.name,
            username: data.username
        }
        if(data.id) {
            user.id = data.id
        } else {
            user.id = nanoid()
        }

        if(data.password || data.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: user.password
            })
        }

        return store.upsert(TABLA, data)
    }

    return {
        list,
        get,
        upsert
    }
}

