const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}
async function start() {
	const content ={
		maximumSentences: 7
	}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	await robots.text(content)
	
	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}
	function askAndReturnPrefix() {
	const prefixes = ['who is', 'what is', 'the history of']
	const selectedPrefixeIndex = readline.keyInSelect(prefixes, 'choose one option: ')
	const selectedPrefixTest = prefixes [selectedPrefixeIndex]
	

	return selectedPrefixTest
	
	}

	console.log(JSON.stringify(content, null, 4))
}

start()
