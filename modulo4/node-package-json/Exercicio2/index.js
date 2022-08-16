const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])
const red = '\u001b[31m';
const blue = '\u001b[34m';
const green = '\u001b[32m';

if (operacao && numero1 && numero2) {
switch(operacao){
	case "mais":
        console.log (blue + "Resposta", numero1 + numero2 )
		break;
	case "menos":
		console.log (green + "Resposta", numero1 - numero2 )
		break;
}
}else{
	console.log (red + "Esperava 3 parâmetros, mas está faltando um ou mais")
}
