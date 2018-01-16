let numeros = [10, 21, 11, 62, 74, 13, 45];

let contador = 0;
let resposta = numeros % 2;

for(let i of numeros){
	if (i % 2 == 0){
		contador = contador + 1;
		// ou contador++		
	}
}
console.log(contador);
	// ele vai mostrar quantos numeros são pares