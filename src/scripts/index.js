import '../styles/index.scss';
import './materialize/bin/materialize';

console.log('webpack starterkit');

document.addEventListener('DOMContentLoaded', function() {
  debugger;
  var options = {
    preventScrolling: true,
    dismissible: true,
    outDuration: 1000
  };
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});