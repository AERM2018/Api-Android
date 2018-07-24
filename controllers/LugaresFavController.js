var {modelLugaresFav}=require('../models/LugaresFavoritos')
var buscar=require('./Lugar&Usuario');
exports.addLugarFav=(req,res)=>{
    var Nom=req.body.Nombre;
    var UN=req.body.UserName;
    var _idLugar,_idUsuario,Ids=[];
    // var lugarFav= new modelLugaresFav({
    //     Nombre:Nom,
    //     UserName:UN
    // })
    
    buscar.FindLugar(Nom,UN).then((ids)=>{
        // _idLugar=id1;
        // _idUsuario=id2;
        Ids[0]=ids[0];
        Ids[1]=ids[1];
        console.log(ids);
        
    })
    // buscar.FindUsuario(UN).then((idUsuario)=>{
    //     _idUsuario=idUsuario
    // });
    setTimeout(() => {
        var lugarFav= new modelLugaresFav({
            Nombre:_idLugar,
            UserName:_idUsuario
        })
        console.log(Ids[0]+"id lugar   y  id usuario"+Ids[1]);
        
    lugarFav.save((error)=>{
        if(error)res.json({success:false,error});
        else res.json({success:true,msj:"El lugar favorito se añadio"})
    });
    }, 777);
}
exports.findLugaresFav=(req,res)=>{
    modelLugaresFav.find({},(error,result)=>{
        if(error)res.json(error);
        else res.json(result);
    })
}