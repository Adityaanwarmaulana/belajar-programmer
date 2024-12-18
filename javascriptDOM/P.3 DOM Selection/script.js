// DOM Selection
// Document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'orange';
// judul.style.backgroundColor = '#777';
// judul.innerHTML = 'Aditya Anwar M';

// // document.getElementsByTagName()
// // -> HTMLCollections
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'yellow';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontsize = '55px';


// // document.getElementsByClassName()
// // -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';


// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'orange';
// p4.style.fontSize = '35px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'yellow';


// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
// 	p[i].style.backgroundColor = 'lightgreen';
// }


// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'red';

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'yellow';