(function (top) {
  console.log('IIFE, SIAF');

  top.myName = 'Dragos';
})(top || global);

console.log((top || global).myName);
