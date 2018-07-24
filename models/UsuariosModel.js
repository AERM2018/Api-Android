var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UsuarioShema = new Schema({
    Nombre:String,
    UserName:String,
    Edad:Number,
    Domicilio:String,
    Celular:String,
    ContactoEmergencia:String,
    Genero:String,
    UbicacionActual:String,
    LugarReciente:String
});
var modelUsuarios=mongoose.model('Usuarios',UsuarioShema)
module.exports.modelUsuarios=modelUsuarios;