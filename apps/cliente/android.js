const http = require('http');

const opcoes = {
    hotname: 'localhost',
    port: 80,
    pat: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        //'Accept': 'text/html',
        //'Content-type': 'application/x-www-form-urlencoded'
        'Content-type': 'application/json'
    }
};

//Content-type
let html = 'nome=José';//x-www-form-urlencoded
let json = { nome: 'José' };
let string_json = JSON.stringify(json);//converte o json em string

let buffer_corpo_response = [];

//http.get('http://localhost', (res) => {
//http.get(opcoes, (res) => {
let req = http.request(opcoes, (res) => {//cria a requisição com parametros

    //utilizando data, vai pegando cada pedaço da pagina que vai renderizando
    res.on('data', (pedaco) => {
        buffer_corpo_response.push(pedaco);
    });

    //disparado quando o carregamento é finalizado
    res.on('end', () => {
        let corpo_response = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_response);
    });

    // res.on('error', () => {

    // });
});

//req.write(html);//anexa a string como body do request
req.write(string_json);
//no final, dispara a requisição
req.end();
