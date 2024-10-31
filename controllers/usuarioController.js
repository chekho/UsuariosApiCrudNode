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

const validateUsuario = (nombre, apellido, email, id = null) => {
  if (!nombre || !email) {
    return { err: true, message: "Nombre y email requeridos" };
  }
  if (!email.includes("@") || !email.includes(".")) {
    return { err: true, message: "Formato de email invalido" };
  }
  if (
    usuarios.find((usuario) => usuario.email === email && usuario.id !== id)
  ) {
    return { err: true, message: "Email ya existe" };
  }
  if (nombre.match(/\d+/) || apellido.match(/\d+/)) {
    return { err: true, message: "Nombre y apellido no pueden tener numeros" };
  }
  return null;
};

const findUsuarioById = (id) => {
  if (isNaN(id)) {
    return { err: true, message: "Id invalido" };
  }
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);
  if (usuarioIndex === -1) {
    return { err: true, message: "Usuario no encontrado" };
  }
  return { usuarioIndex };
};

const getUsuarios = (req, res) => {
  res.json(usuarios);
};

const getUsuario = (req, res) => {
  let id = parseInt(req.params.id);
  const result = findUsuarioById(id);
  if (result.err) {
    res.status(400).json(result);
  } else {
    res.json({
      usuario: usuarios[result.usuarioIndex],
    });
  }
};

const crearUsuario = (req, res) => {
  const { nombre, apellido = "", email } = req.body;
  const validationError = validateUsuario(nombre, apellido, email);
  if (validationError) {
    res.status(400).json(validationError);
    return;
  }
  const id = usuarios.length + 1;
  usuarios.push({ id, nombre, apellido, email });
  res.json({
    usuario: usuarios[usuarios.length - 1],
  });
};

const actualizarUsuario = (req, res) => {
  let id = parseInt(req.params.id);
  const result = findUsuarioById(id);
  if (result.err) {
    res.status(400).json(result);
    return;
  }
  const { nombre, apellido = "", email } = req.body;
  const validationError = validateUsuario(nombre, apellido, email, id);
  if (validationError) {
    res.status(400).json(validationError);
    return;
  }
  usuarios[result.usuarioIndex] = { id, nombre, apellido, email };
  res.json({
    usuario: usuarios[result.usuarioIndex],
  });
};

const eliminarUsuario = (req, res) => {
  let id = parseInt(req.params.id);
  const result = findUsuarioById(id);
  if (result.err) {
    res.status(400).json(result);
    return;
  }
  usuarios.splice(result.usuarioIndex, 1);
  res.json({
    message: "Usuario eliminado",
  });
};

export default {
  getUsuarios,
  getUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
