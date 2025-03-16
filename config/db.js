const mysql = require('mysql2/promise');

async function connect() {
    try {
        const conection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "1234",
            database: "hana",
            port: 3306
        });

        return conection;
    } catch (error) {
        console.error("Connection to database failure: " + error);
        throw error;
    }
}
module.exports = connect;