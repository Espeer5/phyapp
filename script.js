
function drawMenu() {
  var canvas = document.getElementById('menucan');
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0,1);
  ctx.lineTo(20,1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,7);
  ctx.lineTo(20,7);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,14);
  ctx.lineTo(20,14);
  ctx.stroke();
}

drawMenu();
