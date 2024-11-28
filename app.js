const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Configuración inicial
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Modelo de Usuario
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
});

// Sincronización con la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
    await sequelize.sync({ force: true }); // ¡Ojo! Esto elimina los datos en cada ejecución.
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();

// Rutas
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario.' });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    user.name = name;
    user.email = email;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario.' });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    await user.destroy();
    res.json({ message: 'Usuario eliminado.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario.' });
  }
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
