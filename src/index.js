import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', ', webpack-dev-server', ' from app@version 1'], ' ');

  return element;
}

document.body.appendChild(component());