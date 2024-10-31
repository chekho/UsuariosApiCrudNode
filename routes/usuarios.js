import express from "express";
import usuariosController from "../controllers/usuarioController.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del usuario
 *                   nombre:
 *                     type: string
 *                     description: Nombre del usuario
 *                   apellido:
 *                     type: string
 *                     description: Apellido del usuario
 *                   email:
 *                     type: string
 *                     description: Email del usuario
 *                     format: email
 */
router.get("/", usuariosController.getUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario
 *                     nombre:
 *                       type: string
 *                       description: Nombre del usuario
 *                     apellido:
 *                       type: string
 *                       description: Apellido del usuario
 *                     email:
 *                       type: string
 *                       description: Email del usuario
 *                       format: email
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.get("/:id", usuariosController.getUsuario);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario
 *               apellido:
 *                 type: string
 *                 description: Apellido del usuario
 *               email:
 *                 type: string
 *                 description: Email del
 *                 format: email
 *     responses:
 *       200:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario
 *                     nombre:
 *                       type: string
 *                       description: Nombre del usuario
 *                     apellido:
 *                       type: string
 *                       description: Apellido del usuario
 *                     email:
 *                       type: string
 *                       description: Email del usuario
 *                       format: email
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */

router.post("/", usuariosController.crearUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualiza un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario
 *               apellido:
 *                 type: string
 *                 description: Apellido del usuario
 *               email:
 *                 type: string
 *                 description: Email del
 *                 format: email
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario
 *                     nombre:
 *                       type: string
 *                       description: Nombre del usuario
 *                     apellido:
 *                       type: string
 *                       description: Apellido del usuario
 *                     email:
 *                       type: string
 *                       description: Email del usuario
 *                       format: email
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.put("/:id", usuariosController.actualizarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de eliminación
 *                   example: Usuario eliminado
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: boolean
 *                   description: Indica si hubo un error
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.delete("/:id", usuariosController.eliminarUsuario);

export default router;
