const allSection = document.querySelectorAll('section');
for(const item of allSection){
    item.style.border = '2px solid red ';
}

console.log(allSection);

const newone= document.getElementById('creating');
const li = document.createElement('li');
li.innerText = 'Accha mama!';

newone.appendChild(li);



const mainContainer = document.getElementById('main-bg');
const newSection = document.createElement('section');

const h1 = document.createElement('h1'); 
h1.innerText = 'hey there! long time no see..';
newSection.appendChild(h1);

const ul = document.createElement('ul');


const li1 = document.createElement('li');
li1.innerText = 'Aboni marmu';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Aboni';
ul.appendChild(li2);

const l3i = document.createElement('li');
l3i.innerText = 'nidhure marmu';
ul.appendChild(l3i);

newSection.append(ul);

mainContainer.appendChild(newSection);