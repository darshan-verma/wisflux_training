const a = 5;
const b = 6;
const c = 7;

const s = (a+b+c)/2;
const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
document.getElementById('area').textContent = area.toFixed(2);
