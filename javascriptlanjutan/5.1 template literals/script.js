// Template Literals / Template String
// const nama = 'Aditya';
// const umur = '26';
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragments
 const mhs = { 
 	nama : 'Aditya',
 	umur : '26',
 	nim : '123',
 	email : 'Aditya.com',
 };

 const el = `<div class="mhs">
 	<h2>${mhs.nama}</h2>
 	<span class="nim">${mhs.nim}</span>
 </div>`;

 console.log(el);