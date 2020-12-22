const router = require('express').Router();
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth.js');

// Requieren verificación
router.get('/list', auth.verifyUsuario, usuarioController.list);
router.post('/add', auth.verifyUsuario, usuarioController.add);
router.put('/update', auth.verifyUsuario, usuarioController.update);
router.put('/activate', auth.verifyUsuario, usuarioController.activate);
router.put('/deactivate', auth.verifyUsuario, usuarioController.deactivate);

// No requiere verificación
router.post('/login', usuarioController.login);


module.exports = router;