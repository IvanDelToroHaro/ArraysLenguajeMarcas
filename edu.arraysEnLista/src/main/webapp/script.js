var lista = [];
let listaAux = [3, 2, 1, 5, 4];
let listaTexto = ["Hola", "adios", "guatemala", "GuatePeor"]
let asc = true;
// ()lista.concat() = suma o duplica dos arrays
listaAux.sort(function(numero1, numero2) {
	if (numero1 > numero2) {
		return -1
	} else {
		return 1
	}
});

listaTexto.sort(function(numero1, numero2) {
	if (numero1.toLowerCase > numero2.toLowerCase) {
		return -1
	} else {
		return 1
	}
});

function escribirLista() {
	const ruta = document.getElementById("lista");
	const valor = document.getElementById("texto").value;

	lista.push(valor);
	console.log(lista);
	ruta.innerHTML = "";

	for (let i of lista) {
		ruta.innerHTML += "<li>" + i + "</li>";
	}
}

function ordenarLista() {
	lista.sort();
	if (!asc) lista.reverse();
	asc = !asc;

	const ruta = document.getElementById("lista");
	ruta.innerHTML = "";

	for (let i of lista) {
		ruta.innerHTML += "<li>" + i + "</li>";
	}
}

function borrarUltimo() {
	lista.pop();
	const ruta = document.getElementById("lista");
	ruta.innerHTML = "";

	for (let i of lista) {
		ruta.innerHTML += "<li>" + i + "</li>";
	}
}

function filtrarXUsu() {
	const operacion = document.getElementById("seleccionable").value;
	switch (operacion) {
		case 1:

	}
}