const db = {
    'user': [
        { id: '1', name: 'Lely'},
        { id: '2', name: 'Bonita'}
    ]
};

async function list(tabla) {
    return db[tabla] || []
}

async function get(tabla, id) {
    let col = await list(tabla)
    return col.filter( item => item.id === id)[0] || null
}

async function upsert(tabla, data) {
    if(!db[tabla]) {
        db[tabla] = []
    }
    db[tabla].push(data)
    return data
}

async function remove(tabla, id) {
    return true;
}

async function query(tabla, q) {
    let col = await list(tabla)
    let keys = Object.keys(q)
    return col.filter( item => item[keys[0]] === q[keys[0]])[0] || null 
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}