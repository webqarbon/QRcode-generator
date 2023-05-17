const buttongen = document.getElementById('buttongen');
const img = document.getElementById('code');
const text = document.getElementById('text');
const buttonload = document.getElementById('btnl');
const size = document.getElementById('size');
const blue = document.getElementById('blue');
const sky = document.getElementById('sky');
const purple = document.getElementById('purple');
const green = document.getElementById('green');
const reset = document.getElementById('reset');
let color;

reset.onclick = function () {
text.value='';
text.blur();
img.src='start.png';
}

blue.onclick = function () {
  color='&chco=002c60';
};
sky.onclick = function () {
  color='&chco=23B1DE';
};
purple.onclick = function () {
  color='&chco=660066';
};
green.onclick = function () {
  color='&chco=336600';
};



buttongen.onclick = function () {
	img.src = 'https://chart.googleapis.com/chart?cht=qr&chl='+text.value+'&chs=220x220&choe=UTF-8&chld=L|2'+color+'';
};
buttonload.onclick = function () {
  img.src = 'https://chart.googleapis.com/chart?cht=qr&chl='+text.value+'&chs='+size.value+'x'+size.value+'&choe=UTF-8&chld=L|2'+color+'';
  let imageUrl = img.src;
  
  let link = document.createElement('a');
  link.href = imageUrl;
  link.target = '_blank';
  link.click();
};