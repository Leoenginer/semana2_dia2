function ocultar(classe){
	let imgs = document.querySelectorAll(classe);

	console.log(imgs);

	for(let img of imgs){
		img.style.display = 'none';
	}
}
// if(img.style.display == )