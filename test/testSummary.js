const os = require('../lib/osutils')
async function main () {
  // default: rounding is on
  // os.useRound(true)
  runTest()
  os.useRound(false)
  runTest()
}

async function runTest () {
  const summary = await os.getSummary()
  console.log('OS Utils Summary')
  console.log(`Platform:                ${summary.platform}`)
  console.log(`CPUs:                    ${summary.cpuCount}`)
  console.log(`System Uptime       (s): ${summary.sysUptime}`)
  console.log(`Process Uptime      (s): ${summary.processUptime}`)
  console.log(`Free Memory        (Kb): ${summary.freemem}`)
  console.log(`Total Memory       (Kb): ${summary.totalmem}`)
  console.log(`Free Memory         (%): ${summary.freememPercentage}`)
  console.log(`Load Usage          (%): ${summary.loadavg}`)
  console.log(`Load Usage 1 min    (%): ${summary.loadavg1}`)
  console.log(`Load Usage 5 mins   (%): ${summary.loadavg5}`)
  console.log(`Load Usage 15 mins  (%): ${summary.loadavg15}`)
  console.log(`CPU Usage           (%): ${summary.cpuUsage}`)
  console.log(`CPU Free            (%): ${summary.cpuFree}`)
}

main()
