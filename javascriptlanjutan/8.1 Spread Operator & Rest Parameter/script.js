// Spread Operator

// memecah iterable menjadi single element


// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['Aditya', 'Anwar', 'Maulana'];
// const dosen = ['A', 'B', 'C'];
// const orang = [...mhs, 'budi', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);


// Meng-copy Array
// const mhs = ['Aditya', 'Anwar', 'Maulana'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Budi';
// console.log(mhs1);


// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
// 	mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// 	console.log(mhs);



const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;