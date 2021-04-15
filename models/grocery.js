//interacting with the database
const db = require('../util/database');


module.exports = class Grocery {
    constructor (id, item){
        this.id = id;
        this.item = item;
    }


    //Fetch data from database
    static fetchAll(){
        return db.execute('SELECT * FROM groceries');
    }

    //Post data to the database
    static post(item){
        return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
    }

    static update(id, item){
        return db.execute('UPDATE groceries SET item = ? WHERE id = ?', [item, id]);
    }

    static delete(id){
        return db.execute('DELETE  FROM groceries WHERE id = ?', [id])
    }
}