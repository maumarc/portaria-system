//MODAL REGISTRAR ENTRADA

function modalRegistrarEntrada() {
	var entrada = document.querySelector('.modalEntrada');

	entrada.classList.add('active');

	document.querySelector('.modalEntrada__center__h4').addEventListener('click', function () {
		entrada.classList.remove('active');
	})
}

//FIM

//MODAL REGISTRAR SAÍDA

function modalRegistrarSaida() {

	var saida = document.querySelector('.modalSaida');

	saida.classList.add('active');


	document.querySelector('.modalSaida__center__h4').addEventListener('click', function () {
		saida.classList.remove('active');
	})
}
//FIM -----------------------------------------



//MODAL DADOS DE LOGIN

function modalApresentarDados() {

	var acessar = document.querySelector('.modalDadosLogin');


	acessar.classList.add('active');

	document.querySelector('.modalDadosLogin__center__h4').addEventListener('click', function () {
		acessar.classList.remove('active');
	})
}
//FIM -----------------------------------------


//MODAL DADOS DE LOGIN

function modalEditarUsuario() {

	var editar = document.querySelector('.modalEditUser');


	editar.classList.add('active');

	document.querySelector('.modalEditUser__center__h4').addEventListener('click', function () {
		editar.classList.remove('active');
	})
}
//FIM -----------------------------------------



//LOGIN

function logar() {
	var emailLogin = document.getElementById("loginEmail");
	var senhaLogin = document.getElementById("loginSenha");

	if (emailLogin.value == "") {
		alert("Preencha o e-mail!")
	} else if (senhaLogin.value == "") {
		alert("Preencha a senha!")
	} else if (emailLogin.value == "admin@admin.com" && senhaLogin.value == "admin") {
		localStorage.setItem("acesso", true);
		window.location.href = "dashboard.html";

	} else {
		alert("E-mail ou senha inválidos!")
	}
}
//FIM -----------------------------------------




//CADASTRAR USUÁRIO (LOCAL STORAGE)

function cadastrarUsuario() {
	var produtoMatricula = document.getElementById("produtoMatricula");
	var produtoTipo = document.getElementById("produtoTipo");
	var produtoNome = document.getElementById("produtoNome");
	var produtoRG = document.getElementById("produtoRG");
	var produtoPlaca = document.getElementById("produtoPlaca");
	var produtoVeiculo = document.getElementById("produtoVeiculo");

	var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

	if (dados == null) {
		localStorage.setItem("dadosUsuario", "[]");
		dados = [];
	}

	var auxCadastro = {
		matricula: produtoMatricula.value,
		tipo: produtoTipo.value,
		nome: produtoNome.value,
		rg: produtoRG.value,
		placa: produtoPlaca.value,
		veiculo: produtoVeiculo.value
	}

	dados.push(auxCadastro);

	localStorage.setItem("dadosUsuario", JSON.stringify(dados));
	alert("Usuário Cadastrado com sucesso!");

	produtoMatricula.value = "";
	produtoTipo.value = "";
	produtoNome.value = "";
	produtoRG.value = "";
	produtoPlaca.value = "";
	produtoVeiculo.value = "";

	localStorage.clear;
}

//FIM -----------------------------------------


//PREENCHER ÚLTIMOS 5 USUÁRIOS

function lastFive(all) {
	
	var lastFiveUsers = JSON.parse(localStorage.getItem("dadosUsuario"));
	var lastFiveUsers = lastFiveUsers.slice(Math.max(lastFiveUsers.length - 5)).reverse();

	if (all == true) {
		var length = lastFiveUsers.length;
	} else {
		var length = 5;
	}

	for (let i = 0; i < length; i++) {
		let itemContainer = document.createElement('tr');
		var usuarioMatricula = lastFiveUsers[i].matricula
		var usuarioTipo = lastFiveUsers[i].tipo
		var usuarioNome = lastFiveUsers[i].nome
		var usuarioRG = lastFiveUsers[i].rg
		var usuarioPlaca = lastFiveUsers[i].placa

		let item =
			`
		<td class="dashboard__table__tbody__tr__td">${usuarioMatricula}</td>
		<td class="dashboard__table__tbody__tr__td">${usuarioTipo}</td>
		<td class="dashboard__table__tbody__tr__td">${usuarioNome}</td>
		<td class="dashboard__table__tbody__tr__td">${usuarioRG}</td>
		<td class="dashboard__table__tbody__tr__td">${usuarioPlaca}</td>

	`;
		itemContainer.classList.add('dashboard__table__tbody__tr');
		itemContainer.innerHTML = item;

		document.querySelector('.dashboard__table__tbody').appendChild(itemContainer);

	}

}

//FIM -----------------------------------------



//LOCALIZAR USUÁRIO

function locateUser() {
	
	var lastFiveUsers = JSON.parse(localStorage.getItem("dadosUsuario"));
	var userSearch = document.querySelector('.modalEditUser__center__form__input').value;


	for (let i = 0; i < lastFiveUsers.length; i++) {
		var usuarioRG = lastFiveUsers[i].rg
		var usuarioPlaca = lastFiveUsers[i].placa

		if(usuarioRG == userSearch){
			
		}
		if(usuarioPlaca == userSearch){
			
		}

	// 	let item =
	// 		`
	// 	<td class="dashboard__table__tbody__tr__td">${usuarioMatricula}</td>
	// 	<td class="dashboard__table__tbody__tr__td">${usuarioTipo}</td>
	// 	<td class="dashboard__table__tbody__tr__td">${usuarioNome}</td>
	// 	<td class="dashboard__table__tbody__tr__td">${usuarioRG}</td>
	// 	<td class="dashboard__table__tbody__tr__td">${usuarioPlaca}-1000</td>

	// `;
	// 	itemContainer.classList.add('dashboard__table__tbody__tr');
	// 	itemContainer.innerHTML = item;

	// 	document.querySelector('.dashboard__table__tbody').appendChild(itemContainer);

	}

}

//FIM ------------------------