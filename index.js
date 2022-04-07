const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const vitrualMachines = [];
const physicalServer = { count: 0, resource: 0 };

const maximizePhysicalServers = () => {
  const getVmResource = () => {
    readline.question('Please input virtual machine resource: ', (vm) => {
      const vmFloat = parseFloat(vm);
      if (!vmFloat || vmFloat < 0) {
        isAcceptingInput = false;
        console.log('Please input a valid virtual machine resource (positive numerical value) \n');
        getVmResource();
      } else {
        console.log(`You have added a virtual machine with a resource requirement of ${vm}`);
        vitrualMachines.push(vm);
        addAnother();
      }
    });
  };

  const addAnother = () => {
    readline.question('Do you wish to add another? (y/n): ', (input) => {
      console.log(input);
      if (input === 'y') {
        getVmResource();
      } else if (input === 'n') {
        getPhysicalServer();
      } else {
        console.log('Please enter a valid value');
        addAnother();
      }
    });
  };

  const getPhysicalServer = () => {
    readline.question('Please input physical server resource: ', (ps) => {
      const psFloat = parseFloat(ps);
      if (!psFloat || psFloat < 0) {
        console.log('Please input a valid physical server resource (positive numerical value) \n');
        getPhysicalServerResource();
      } else {
        console.log(`The resource available for each server is ${psFloat}`);
        physicalServer.resource = psFloat;
      }
    });
  };

  getVmResource();
};

maximizePhysicalServers();
