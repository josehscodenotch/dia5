let express = require("express");
let app = express();
let cors = require('cors')
let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host         : "localhost",
        user         : "root",
        password     : "codenotch",
        database     : "angular"
    }); 

connection.connect(function(error){
    if(error){
       console.log(error);
    }else{
       console.log('Conexion correcta.');
    }
 });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/usuarios", 
        function(request, response)
        {
            let sql;
            if (request.query.id == null)
                sql = "SELECT * FROM usuarios";
            else
                sql = "SELECT * FROM usuarios WHERE id=" + request.query.id;
    
            connection.query(sql, function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    response.send(result);
                }
            })
        }
        );

app.get("/usuarios/:id", 
        function(request, response)
        {
            let sql = "SELECT * FROM usuarios WHERE id=" + request.params.id;
            console.log(sql);  
            connection.query(sql, function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    console.log(result)
                    response.send(result);
                }
            })
        }
        ); 
        
app.post("/usuarios", 
        function(request, response)
        {
            console.log(request.body);
            let sql = "INSERT INTO usuarios (nombre, apellido1, apellido2) " + 
                    "VALUES ('" + request.body.nombre + "', '" + 
                                  request.body.apellido1 + "', '" +
                                  request.body.apellido2 + "')";
            console.log(sql);                      
            connection.query(sql, function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    if (result.insertId)
                        response.send(String(result.insertId));
                    else
                        response.send("-1");
                }
            })
        }
        );         

app.put("/usuarios", 
        function(request, response)
        {
            console.log(request.body);
            let params = [request.body.nombre, 
                          request.body.apellido1, 
                          request.body.apellido2,
                          request.body.id]

            let sql = "UPDATE usuarios SET nombre = COALESCE(?, nombre) , " + 
                       "apellido1 = COALESCE(?, apellido1) , " + 
                       "apellido2 = COALESCE(?, apellido2)  WHERE id = ?";
            console.log(sql); 
            connection.query(sql, params,function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    response.send(result);
                }
            })
        }
        ); 
        
app.delete("/usuarios", 
        function(request, response)
        {
            console.log(request.body);
            let sql = "DELETE FROM usuarios WHERE id = '" + request.body.id + "'";
            console.log(sql); 
            connection.query(sql, function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    response.send(result);
                }
            })
        }
        ); 

 app.listen(3000);
