
function drawMenu() {
  var canvas = document.getElementById('menucan');
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(8,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,4);
  ctx.lineTo(8,4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,8);
  ctx.lineTo(8,8);
  ctx.stroke();
}

drawMenu();
