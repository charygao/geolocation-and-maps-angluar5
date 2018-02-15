var copy = require('@ionic/app-scripts/config/copy.config.js');
console.log(copy);
copy.copyAssets = {
  src: ['{{ROOT}}/node_modules/devextreme/dist/css/**/*'],
  dest: '{{WWW}}/assets/css'
};

module.exports = copy;