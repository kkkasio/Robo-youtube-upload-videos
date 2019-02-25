const readline = require('readline-sync')

function start(){
	const content = {}
	
		content.searchTerm = askAndReturnSearchTerm()
		content.prefix     = askAndReturnPrefix()
		
		function askAndReturnSearchTerm(){
			return readline.question('Digite o termo para buscar no Wikipedia: ')
		}			
		
		function askAndReturnPrefix(){
			const prefixes = ['Quem e','Oque e','A historia de']
			const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
			const selectedPrefixText  = prefixes[selectedPrefixIndex]
			
			return selectedPrefixText
		}
			console.log(content)
	}

start()