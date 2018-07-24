var {modelUsuarios}=require('../models/UsuariosModel');
exports.findAllUsuarios=(req,res)=>{
    console.log("GET/Usuarios");
    modelUsuarios.find({},(error,Usuarios)=>{
        if(error)res.json(error);
        else res.json({success:true,Usuarios:Usuarios});
    });
}
exports.addUsuario=(req,res)=>{
    var usuario = new modelUsuarios({
        Nombre:req.body.Nombre,
        UserName:req.body.UserName,
        Edad:req.body.Edad,
        Domicilio:req.body.Domicilio,
        Celular:req.body.Celular,
        ContactoEmergencia:req.body.ContactoEmergencia,
        Genero:req.body.Genero,
        UbicacionActual:req.body.UbicacionActual,
        LugarReciente:req.body.LugarReciente
    })

    usuario.save((error,UsuarioAgregado)=>{
        if(error)res.json(error);
        else res.json({success:true,UsuarioAgregado:UsuarioAgregado});
    });
}
exports.updateUsuario=(req,res)=>{
    var username=req.params.UserName;
    var query={UserName:username};
    var datosNvos={$set:{
        Nombre:req.body.Nombre,
        UserName:req.body.UserName,
        Edad:req.body.Edad,
        Domicilio:req.body.Domicilio,
        Celular:req.body.Celular,
        ContactoEmergencia:req.body.ContactoEmergencia,
        Genero:req.body.Genero,
        UbicacionActual:req.body.UbicacionActual,
        LugarReciente:req.body.LugarReciente
    }}
    modelUsuarios.update(query,datosNvos,(error)=>{
        if(error)res.json(error);
        else res.json({succes:true,msj:"El usuario se actualizo correctamente"});
    });
}
exports.deleteUsuario=(req,res)=>{
    var username=req.params.UserName;
    var query={UserName:username};
    modelUsuarios.remove(query,(error)=>{
        if(error)res.json(error);
        else res.json({success:true,msj:"El usuario se elimino con exito"});
    });
}