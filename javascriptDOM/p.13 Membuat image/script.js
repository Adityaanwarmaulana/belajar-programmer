const container = document.querySelector('.container');
const jembatan = document.querySelector('.jembatan');
const thumb = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
	
	// cek apakah yang di klik adalah thumb 
	if(e.target.className == 'thumb' ) {
		jembatan.src = e.target.src;
		jembatan.classList.add('fade');
		setTimeout(function() {
			jembatan.classList.remove('fade');
		}, 500);

		thumb.forEach(function(thumb) {
			// if( thumb.classList.contains('active') ) {
			// 	thumb.classList.remove('active');
			// }
			thumb.className = 'thumb';
		});

		e.target.classList.add('active');
	}

});