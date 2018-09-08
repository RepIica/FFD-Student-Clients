const { MatrixManager } = require('./MatrixManager.js')

const matrix = new MatrixManager()


matrix.getQueue()
  .then(resp => {
    console.log(`queue was: `, resp)
  })


// var step = 2*Math.PI/20;
var step = 0.05;
var h = 420;
var k = 150;
var r = 50;

// for (var i = r; i > 0; i--) {
//   for(var theta=0; theta < 2*Math.PI;  theta+=step){
//     console.log('theta:', theta)
//     var x = h + i*Math.cos(theta);
//     var y = k - i*Math.sin(theta);    //note 2.
//     matrix.setTile({x: Math.floor(x), y: Math.floor(y), c: "3498DB"})
//     console.log('COORDS',Math.floor(x), Math.floor(y))
//     console.log(' ')
//   }
// }

// console.log(matrix.getQueue())
matrix.clearQueue()
/*
for (var x = 310; x < 360; x++) {
  for (var y = 10; y < 40; y++) {
    matrix.setTile({x: x, y: y, c: "3498DB"})
    .then(resp => console.log(resp))
  }
}
// */
