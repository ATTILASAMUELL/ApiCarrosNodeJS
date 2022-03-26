const CarroService = require('../services/CarroService');

module.exports ={
    buscarTodos: async(req,res)=>{
        //Retorno JSON
        let json ={error:'', result:[]};

        let carros = await CarroService.buscarTodos();

        for(let i in carros){
            json.result.push({
                placa: carros[i].placa,
                chassi: carros[i].chassi,
                renavam : carros[i].renavam ,
                modelo : carros[i].modelo ,
                marca : carros[i].marca ,
                ano: carros[i].ano




            })
        }
        res.json(json);
    },
    buscandoUmCarro: async(req,res) =>{
        let json = {error:'', result:{}};
        let id = req.params.id;
        let carro = await CarroService.buscandoUmCarro(id);

        if(carro){
            json.result = carro;
        }
        res.json(json);
    },
    inserir: async(req,res) =>{
        let json = {error:'', result:{}};
        let placa = req.body.placa;
        let chassi   = req.body.chassi  ;
        let renavam  = req.body.renavam ;
        let modelo  = req.body.modelo ;
        let marca   = req.body.marca  ;
        let ano  = req.body.ano ;
        

        
        if(id && placa && chassi && renavam && modelo && marca && ano ){
            await CarroService.alterar(id, placa, chassi, renavam ,modelo, marca  ,ano  );

            json.result = {
                Resultado: "Dados inserido com Sucesso",
                cod: carroCodigo
            };
        }else{
            json.error = 'Parametros não enviado';
        }
        res.json(json);
    },
    alterar: async(req,res) =>{
        let json = {error:'', result:{}};
        let id = req.params.id;
        let placa = req.body.placa;
        let chassi   = req.body.chassi  ;
        let renavam  = req.body.renavam ;
        let modelo  = req.body.modelo ;
        let marca   = req.body.marca  ;
        let ano  = req.body.ano ;
        

        
        if(id && placa && chassi && renavam && modelo && marca && ano){
            let carroCodigo = await CarroService.alterar(id,placa, chassi, renavam ,modelo, marca  ,ano  );

            json.result = {
                Resultado: "Dados inserido com Sucesso",
                cod: carroCodigo
            };
        }else{
            json.error = 'Parametros não enviado';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.id);
        
        res.json(json);
    },
}