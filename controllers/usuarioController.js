let usuarios = [
  {
    id: 1,
    nombre: "Sergio",
    apellido: "Hernandez",
    email: "sergio@gmail.com",
  },
  {
    id: 2,
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@gmail.com",
  },
  {
    id: 3,
    nombre: "Maria",
    apellido: "Perez",
    email: "maria@gmail.com",
  },
  {
    id: 4,
    nombre: "Pedro",
    apellido: "Perez",
    email: "pedro@gmail.com",
  },
];

const getUsuarios = (req, res) => {
  res.json(usuarios);
};

const getUsuario = (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ err: true, message: "Id invalido" });
    return;
  }
  let usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);
  if (usuarioIndex === -1) {
    res.status(404).json({ err: true, message: "Usuario no encontrado" });
  } else {
    res.json({
      usuario: usuarios[usuarioIndex],
    });
  }
};

const crearUsuario = (req, res) => {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido || "";
  let email = req.body.email;
  if (!nombre && !email) {
    res.status(400).json({ err: true, message: "Nombre y email requeridos" });
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    res.status(400).json({ err: true, message: "Formato de email invalido" });
    return;
  }
  if (usuarios.find((usuario) => usuario.email === email)) {
    res.status(400).json({ err: true, message: "Email ya existe" });
    return;
  }
  if (nombre.match(/\d+/) || apellido.match(/\d+/)) {
    res.status(400).json({
      err: true,
      message: "Nombre y apellido no pueden tener numeros",
    });
    return;
  }
  let id = usuarios.length + 1;
  usuarios.push({
    id: id,
    nombre: nombre,
    apellido: apellido,
    email: email,
  });
  res.json({
    usuario: usuarios[usuarios.length - 1],
  });
};

const actualizarUsuario = (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ err: true, message: "Id invalido" });
    return;
  }
  let usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);
  if (usuarioIndex === -1) {
    res.status(404).json({ err: true, message: "Usuario no encontrado" });
    return;
  }
  let nombre = req.body.nombre;
  let apellido = req.body.apellido || "";
  let email = req.body.email;
  if (!nombre && !email) {
    res.status(400).json({ err: true, message: "Nombre y email requeridos" });
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    res.status(400).json({ err: true, message: "Formato de email invalido" });
    return;
  }
  if (usuarios.find((usuario) => usuario.email === email)) {
    res.status(400).json({ err: true, message: "Email ya existe" });
    return;
  }
  if (nombre.match(/\d+/) || apellido.match(/\d+/)) {
    res.status(400).json({
      err: true,
      message: "Nombre y apellido no pueden tener numeros",
    });
    return;
  }
  usuarios[usuarioIndex].nombre = nombre;
  usuarios[usuarioIndex].apellido = apellido;
  usuarios[usuarioIndex].email = email;
  res.json({
    usuario: usuarios[usuarioIndex],
  });
};

const eliminarUsuario = (req, res) => {};

export default {
  getUsuarios,
  getUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
