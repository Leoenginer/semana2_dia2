let numeros = [10, 20, 102, 6, 7, 139, 45];

let maior = 0;

for(let i of numeros){
	if (i > maior) {
		// ele verifica quais os valores maiores que i
		maior = i;
		// depois que ele verificou, ele informa qual o maior valor que o i pode-se atribuir
	}
}
console.log(`o maior numero é ${maior}`);