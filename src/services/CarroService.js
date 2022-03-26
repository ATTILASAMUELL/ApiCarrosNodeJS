const db = require('../db');
module.exports = {

    buscarTodos: ()=>
    {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros',(error, results)=>{
                if(error){ rejeitado(error); return;}
                aceito(results);
            })
        })
    },
    buscandoUmCarro: (id)=> {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros WHERE id = ?', [id], (error,results)=>{
                if(error){ rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },
    inserir: (placa, chassi, renavam ,modelo, marca  ,ano  )=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO carros (placa,chassi,renavam,modelo,marca,ano) VALUES (?,?,?,?,?,?)',
            [placa,chassi,renavam,modelo,marca,ano], 
            (error,results)=>{
                if(error){ rejeitado(error); return;}
                //aceito(results.insertCodigo)
            })

        })
    },
    alterar: (id ,placa, chassi, renavam ,modelo, marca  ,ano  )=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE  carros SET  placa = ?,chassi = ?,renavam = ?,modelo = ?,marca = ?,ano = ? WHERE id = ? ',
            [placa,chassi,renavam,modelo,marca,ano, id], 
            (error,results)=>{
                if(error){ rejeitado(error); return;}
                aceito(results)
            })

        })
    },
    excluir: (id)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM carros WHERE id = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }

};