const os = require('../lib/osutils')
async function main() {
  console.log('\n')
  console.log('OS Utils')
  console.log(`Platform:                ${os.platform()}`)
  console.log(`CPUs:                    ${os.cpuCount()}`)
  console.log(`System Uptime       (s): ${os.sysUptime()}`)
  console.log(`Process Uptime      (s): ${os.processUptime()}`)
  console.log(`Free Memory        (Kb): ${os.freemem()}`)
  console.log(`total Memory       (Kb): ${os.totalmem()}`)
  console.log(`Free Memory         (%): ${os.freememPercentage()}`)
  console.log(`Load Usage          (%): ${os.loadavg()}`)
  console.log(`Load Usage 1 min    (%): ${os.loadavg(1)}`)
  console.log(`Load Usage 5 mins   (%): ${os.loadavg(5)}`)
  console.log(`Load Usage 15 mins  (%): ${os.loadavg(15)}`)
  const usage = await os.cpuUsage()
  console.log(`CPU Usage           (%): ${usage}`)
  const free = await os.cpuFree()
  console.log(`CPU Free            (%): ${free}`)
}
main()

console.log('\n')
