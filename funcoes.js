function fazerMilkshake(umSabor, umTamanho='grande'){
	let milkshake = {
		sabor: umSabor,
		tamanho: umTamanho,
		marca: 'Bobs'
	}
	return(milkshake);
}
// execução
let produto = fazerMilkshake('chocolate', 'médio');
console.log (produto);
