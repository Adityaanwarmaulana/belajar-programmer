// 1. HTML Fragments
// const mhs = {
// 	nama: 'Aditya',
// 	umur: 26,
// 	nim: '123',
// 	email: 'Aditya.com'
// };

// const el = `<div class="mhs">
// 	<h2>${mhs.nama}</h2>
// 	<span class="nim">${mhs.nim}</span>
// </div>`;


// Looping
// const mhs = [
// 	{
// 		nama: 'Aditya',
// 		email: 'Aditya.com'
// 	},
// 		{
// 		nama: 'Anwar',
// 		email: 'Anwar.com'
// 	},
// 		{
// 		nama: 'Maulana',
// 		email: 'Maulana.com'
// 	}
// ];

// const el = `<div class="mhs">
// 	${mhs.map(m => `<ul>
// 		<li>${m.nama}</li>
// 		<li>${m.email}</li>
// 		</ul>`).join('')}
// </div>`;


// 3. Conditionals
// ternary
// const lagu = {
// 	judul: 'Yang Terdalam',
// 	penyanyi: 'Noah',
// 	feat: 'Aing'
// }

// const el = `<div class="lagu">
// 	<ul>
// 		<li>${lagu.judul}</li>
// 		<li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// 	</ul>
// </div>`;


// 4. Nested
// HTML bersarang
const mhs = {
	nama: 'Aditya',
	semester: 8,
	mataKuliah: ['RPL', 'PBO', 'Jaringan']
};

function cetakMataKuliah(mataKuliah) {
	return `
		<ol>
			${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
		</ol>	
	`;
}

const el = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="semester">Semester : ${mhs.semester}</span>
	<h4>Mata Kuliah :</h4>
	${cetakMataKuliah(mhs.mataKuliah)}
</div>`;


document.body.innerHTML = el;