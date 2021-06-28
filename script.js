
function drawMenu() {
  var canvas = document.getElementById('menucan');
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(1,1);
  ctx.lineTo(9,1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(1,5);
  ctx.lineTo(9,5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(1,9);
  ctx.lineTo(9,9);
  ctx.stroke();
}

drawMenu()
