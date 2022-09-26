os-utils
========

An operating system utility library. Some methods are wrappers of node libraries
and others are calculations made by the module.

This is a fork of a fork.  The original author Oscar Mejia [oscmejia@vovsolutions.com](mailto:oscmejia@vovsolutions.com). Web site [http://oscar-mejia.com](http://oscar-mejia.com).
Original repository: 
[Git](https://github.com/oscmejia/os-utils) 

In the second fork [https://github.com/accnops/os-utils](https://github.com/accnops/os-utils)  Arthur Cnops 
cleaned up the error handling and updated the library to use Promises.

This fork 
- updates the Readme
- update lint using ````npm init @eslint/config````
- fixes the testers to use the promises, 
- provides an option to round all values to two decimal places and 
- provides a comprehensive get data method that provides all the essentials in one function call.

## Installation

One line installation with [npm](http://npmjs.org). 
```bash
# Original
npm install os-utils

# this fork
npm install "git+https://github.com/edehr/os-utils.git"
```

Then in your code 
```js
const os = require('../lib/osutils')

async function main() {
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
  console.log(`Load Usage          (%): ${summary.loadavg}`)
  console.log(`Load Usage 1 min    (%): ${summary.loadavg1}`)
  console.log(`Load Usage 5 mins   (%): ${summary.loadavg5}`)
  console.log(`Load Usage 15 mins  (%): ${summary.loadavg15}`)
  console.log(`CPU Usage           (%): ${summary.cpuUsage}`)
  console.log(`CPU Free            (%): ${summary.cpuFree}`)
}

main()
```
Produces output similar to this 
```shell
OS Utils Summary
Platform:                darwin
CPUs:                    8
System Uptime       (s): 2138421
Process Uptime      (s): 0.019882667
Free Memory        (Kb): 399.39
Total Memory       (Kb): 16384
Free Memory         (%): 0.02
Load Usage          (%): 4.17
Load Usage 1 min    (%): 3.99
Load Usage 5 mins   (%): 4.48
Load Usage 15 mins  (%): 4.79
CPU Usage           (%): 0.43
CPU Free            (%): 0.63
```

## Usage

The following methods are available:

### Set rounding
Set rounding on or off.  Default is rounding is enabled.
```js 
os.useRound(true | false)
```

### Get summary fo all data
Get a data structure with all the OS Utils information in one package.
```js 
 const summary = await os.getSummary()
```

### Calculate CPU usage for the next second
This is not an average of CPU usage like it is in the "os" module. The callback will receive a parameter with the value.
```js
const value = await os.cpuUsage();
```

### Calculate free CPU for the next second
This is not based on average CPU usage like it is in the "os" module. The callback will receive a parameter with the value.
```js
const value = await os.cpuFree();
```

### Get the platform name
```js
os.platform();
```

### Get number of CPUs
```js
os.cpuCount()
```

### Get current free memory
```js
os.freemem()
```

### Get total memory
```js
os.totalmem()
```

### Get a current free memory percentage
```js
os.freememPercentage()
```

### Get the number of miliseconds the system has been running for
```js
os.sysUptime();
```

### Get the number of miliseconds the process has been running
```js
os.processUptime() 
```

### Get average load for 1, 5 or 15 minutes
```js
os.loadavg(1)
os.loadavg(5)
os.loadavg(15)
```
