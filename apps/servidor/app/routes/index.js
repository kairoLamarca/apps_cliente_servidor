module.exports = function (application) {
	application.get('/', function (req, res) {

		res.format({
			html: () => {
				res.send('Bem vindo a sua app NodeJS!');
			},
			json: () => {
				let retorno = {
					body: 'Bem vindo a sua app NodeJS!'
				};
				res.json(retorno);
			}
		})

		
	});
}