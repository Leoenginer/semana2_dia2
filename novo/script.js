function ocultar(classe){
	let imgs = document.querySelectorAll(classe);

	console.log(imgs);

	for(let img of imgs){
		img.style.transform = 'rotateY(365deg)';
	}
}
// if(img.style.display == )