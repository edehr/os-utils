var os = require('../lib/OSUtils')

console.log('\n')
console.log( 'OS Utils')
console.log('\n')
  
setInterval(async () => {
	const usage = await os.cpuUsage()
		console.log( 'CPU Usage (%): ' + usage )
}, 1000 )
