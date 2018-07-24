var {modelLugares}=require('../models/LugaresModel');
exports.findAllLugares=(req,res)=>{
    modelLugares.find({},(error,Lugares)=>{
        if(error)res.json(error);
        else res.json({success:true,Lugares});
    });
}
exports.addLugares=(req,res)=>{
    var lugar=new modelLugares({
        Nombre:req.body.Nombre,
        Ubicacion:req.body.Ubicacion,
        Horario:{
            Apertura:req.body.Horario.Apertura,
            Cierre:req.body.Horario.Cierre
        }
    })
    lugar.save((error,lugarNvo)=>{
        if(error)res.json(error);
        else res.json({success:true,Lugar_Nuevo:lugarNvo});
    });
}