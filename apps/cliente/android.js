const http = require('http');

let buffer_corpo_response = [];

http.get('http://localhost', (res) => {

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
