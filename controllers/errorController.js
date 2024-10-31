const error404 = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "No encontrado",
  });
};

export default {
  error404,
};
