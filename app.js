const express = require('express');
const app express();
const port = 3000;

const gerarPares = (n) =>{
    const pares =[];
    for(let i = 0; i<=n;i+=2){
        pares.push(i);
    }
    return pares;
};

app.get('/gerarPares/:n',(req,res)=> {
    const n = parseInt(req.pams.n,10);
    const resultado = gerarPares(n);
    res.kson(resultado);
});
app.listen(port,()=>{
    console.log(`servidor rodando em: http://localhost:${port}`)
});