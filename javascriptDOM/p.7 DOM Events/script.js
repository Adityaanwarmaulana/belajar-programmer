// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
// 	p2.style.backgroundColor = 'orange';
// }
// function ubahWarnaP3() {
// 	p3.style.backgroundColor = 'orange';
// }



// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const teksLiBaru = document.createTextNode('item baru');
// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// });



const p3 = document.querySelector('.p3');
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightgreen';
// }
// p3.onclick = function() {
// 	p3.style.color = 'red';
// }
p3.addEventListener('click', function() {
	p3.style.backgroundColor = 'lightgreen';
});
p3.addEventListener('click', function() {
	p3.style.color = 'red';
});