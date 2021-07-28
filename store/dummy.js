const db = {
    'user': [
        { id: 1, name: 'Lely'},
        { id: 2, name: 'Bonita'}
    ]
};

function list(table) {
    return db[table]
}

function get(table, id) {
    let col = list(tabla)
    return col.filter( item => item.id === id)[0] || null
}

function upsert(table, data) {
    db[collection].push(data)
}

function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}