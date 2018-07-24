var express=require('express');
var mongoose=require('mongoose');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var morgan=require('morgan');
var app= express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
var BD="mongodb://JpgAngel:Jpg1407a@ds018568.mlab.com:18568/jpginvidentes"
mongoose.connect(BD,{ useNewUrlParser: true },(error)=>{
    if(error)console.log("Hay un error al conectarse a la base de datos");
    else console.log("Conncted to database");
    
});
mongoose.connection
    .once('open', () => console.log('Connection has been sucessfully'))
    .on('error', console.error.bind('Check the connection'))
    
app.listen(3000, function() {
    console.log("Corriendo en http://localhost:3000");
    });
var router=express.Router();
var UsuariosCtrl=require('./controllers/UsariosController');
var LugaresCtrl=require('./controllers/LugaresController');
var LugaresFavCtrl=require('./controllers/LugaresFavController');
router.route('/Usuarios')
    .get(UsuariosCtrl.findAllUsuarios)
    .post(UsuariosCtrl.addUsuario);
router.route('/Usuarios/:UserName')
    .put(UsuariosCtrl.updateUsuario)
    .delete(UsuariosCtrl.deleteUsuario)
router.route('/Lugares')
    .get(LugaresCtrl.findAllLugares)
    .post(LugaresCtrl.addLugares)
router.route('/LugaresFav')
    .get(LugaresFavCtrl.findLugaresFav)
    .post(LugaresFavCtrl.addLugarFav)
app.use('/api',router)