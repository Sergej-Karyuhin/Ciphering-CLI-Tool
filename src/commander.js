function getConfig(i, arr, config) {
  if (arr[i] === '-c' || arr[i] === '--config') {
    if (config) {
      console.error(`Error: '-c' or '--config' flag can only be used once`);
      process.exit(1);
    }
    return arr[i + 1];
  }
}
function getInput(i, arr, config) {
  if (arr[i] === '-i' || arr[i] === '--input') {
    if (config) {
      console.error(`Error: '-i' or '--input' flag can only be used once`);
      process.exit(2);
    }
    return arr[i + 1];
  }
}
function getOutput(i, arr, config) {
  if (arr[i] === '-o' || arr[i] === '--output') {
    if (config) {
      console.error(`Error: '-o' or '--output' flag can only be used once`); 
      process.exit(3);
    }
    return arr[i + 1];
  }
}

function validateConfig(config) {
  if (config[0] === 'C') {
    validateFlagParam(config);
    return;
  }
  if (config[0] === 'R') {
    validateFlagParam(config);
    return;
  }
  if (config[0] === 'A') {
    if (config.length !== 1) {
      console.error(`Error: misconfiguration of flag 'A'`);
      process.exit(4);
    }
    return;
  }
  console.error(`Error: valid flags are 'C', 'R', 'A'`);
  process.exit(5);
}
function validateFlagParam(action) {
  if (action.slice(1) === '1' || action.slice(1) === '0') {
    return;
  }
  console.error('Error: valid values for flag Y are 0 or 1');
  process.exit(1);
}

const commander = () => {
  const args = process.argv.slice(2);
  let config = '';
  let input = '';
  let output = '';
  args.forEach((item, index) => {
    config = getConfig(index, args, config) || config;
    input = getInput(index, args, input) || input;
    output = getOutput(index, args, output) || output;
  });
  const validConfig = config.split('-');
  validConfig.forEach(validateConfig);
  return { config: validConfig, input, output };
};

export default commander;