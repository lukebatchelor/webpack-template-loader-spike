const loaderUtils =  require('loader-utils');
const vm = require('vm');

module.exports = function(content, map, meta) {
  const script = new vm.Script(content);
  const sandbox = { newContent: 'default', require, console, __dirname: this.context }
  script.runInNewContext(sandbox);
  return  sandbox.newContent;
};
