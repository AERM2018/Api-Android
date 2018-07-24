var {modelUsuarios}=require('../models/UsuariosModel');
var {modelLugares}=require('../models/LugaresModel');

exports.FindLugar=(Nom,UN)=>{
    var id1,id2;
    return new Promise((resolve,reject)=>{
        modelLugares.find({Nombre:Nom},{_id:1},(error,idLugar)=>{
            if(error)res.json(error);
            else{
                console.log("ID LUGAR"+idLugar[0]._id);
                id1=idLugar[0]._id
                // resolve(idLugar[0]._id);
            }
        });
        modelUsuarios.find({UserName:UN},{_id:1},(error,idUsuario)=>{
                        if(error)res.json(error);
                        else{
                            console.log("ID USUARIO"+idUsuario[0]._id);
                            id2=idUsuario[0]._id
                            var ids=[id1,id2]
                            resolve(ids);
                        }
            
                    })
    })
}

// exports.FindUsuario=(UN)=>{
//     return new Promise((resolve,reject)=>{
//         modelUsuarios.find({UserName:UN},{_id:1},(error,idUsuario)=>{
//             if(error)res.json(error);
//             else{
//                 console.log("ID USUARIO"+idUsuario[0]._id);
//                 resolve(idUsuario[0]._id);
//             }

//         })
//     })
// }