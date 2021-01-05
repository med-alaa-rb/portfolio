const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    return;
  }
});


const addUserName = (name, callback) => {
  let sql = `insert into users (username) values ('${name}')`;
  connection.query(sql, (err, data)=> {
    if(err) throw callback(err);
    callback(null, data)
  })
}

module.exports = { addUserName };
