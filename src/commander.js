const commander = () => {
  const args = process.argv.slice(2);
  let config = '';
  let input = '';
  let output = '';

  return { config, input, output };
};

export default commander;