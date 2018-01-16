let alunos = [
	{
		nome: 'Enzo',
		nota: 8
	},
	{
		nome: 'Valentina',
		nota: 7
	},
	{
		nome: 'Fernanda',
		nota: 5
	},
	{
		nome: 'Caique',
		nota: 2
	},
	{
		nome: 'Marcelo',
		nota: 10
	}
];

let total = 0;

for(let umAluno of alunos){
	total = total + umAluno.nota;
}

let media = total / alunos.length;
// length vai informar quantos vetores tem

console.log(`A soma das notas é ${total} e a média é ${media}`);