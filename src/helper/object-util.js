const _  = require('lodash');

// Array Merge
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

module.exports = {
  mix(object, sources) {
    return _.mergeWith.apply(null, [object, sources, customizer]);
  }
}