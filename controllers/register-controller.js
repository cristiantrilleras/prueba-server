const bcrypt = require('bcryptjs');
let mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bd_persona',
  debug    :  false
});


let register = (req,res) => {
    let nombre = req.body.nombre;
    let id = req.body.id;
    let telefono = req.body.telefono;
    let edad = req.body.edad;
    let profesion = req.body.profesion;

    let insertQuery = 'INSERT INTO persona (id,nombre, edad, telefono, profesion) VALUES (?,?,?,?,?)';
    let query = mysql.format(insertQuery,[id,nombre,edad,telefono,profesion]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(response.insertId);
    });
    

    return res.status(201).send(
      { status: 'register ok'}
    );       
}


module.exports = {
    register
}