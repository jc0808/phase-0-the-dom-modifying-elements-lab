// Write your code here!

const main = document.getElementById('main');

main.remove();

const newHeader = document.createElement('H1');

newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Joshua is the champion";

document.append(newHeader);