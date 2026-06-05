const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_web',
    password: 'Jorge001',
    port: 5432
});

app.get('/usuarios',async(req, res)=>{
    try{
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);

    }catch(error){
        console.log(error);
        res.status(500).json({error:'ERROR'});

    }
});


app.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;


  if (!usuario || !contrasena) {
    return res.status(400).json({ success: false, message: 'Faltan datos' });
  }

  try {

    const query = 'SELECT id, nombre, email FROM usuarios WHERE nombre = $1 AND contrasena = $2';
    const result = await pool.query(query, [usuario, contrasena]);

    if (result.rows.length > 0) {

      res.json({
        success: true,
        userData: result.rows[0]
      });
    } else {

      res.json({
        success: false,
        message: 'Usuario o contraseña incorrectos'
      });
    }
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

app.listen(3000,()=>{
    console.log('Servidor funcionando');
});