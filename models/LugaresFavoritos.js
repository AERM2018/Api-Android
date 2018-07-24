var mongoose=require('mongoose');
var Schema=mongoose.Schema;
// var {modelUsuarios}=require('./UsuariosModel');
// var {modelLugares}=require('./LugaresModel');
var LugaresFavShema = new Schema({
    Nombre:{type:Schema.Types.ObjectId,ref:"Lugares"},
    UserName:{type:Schema.Types.ObjectId,ref:"Usuarios"}
})
exports.modelLugaresFav=mongoose.model('LugaresFav',LugaresFavShema);
