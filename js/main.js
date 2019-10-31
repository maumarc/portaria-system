//MODAL REGISTRAR ENTRADA

var register = document.querySelector('.verde');
var entrada = document.querySelector('.modalEntrada');

register.addEventListener('click', function(){
	entrada.classList.add('active');
})
document.querySelector('.modalEntrada__center__h4').addEventListener('click', function(){
	entrada.classList.remove('active');
})
document.querySelector('.modalEntrada__center__h4').addEventListener('click', function(){
	entrada.classList.remove('active');
})

//FIM

//MODAL REGISTRAR SAÍDA

var leave = document.querySelector('.azul');
var saida = document.querySelector('.modalSaida');

leave.addEventListener('click', function(){
	saida.classList.add('active');
})

document.querySelector('.modalSaida__center__h4').addEventListener('click', function(){
	saida.classList.remove('active');
})

//FIM -----------------------------------------




//MODAL DADOS DE LOGIN

var login = document.querySelector('.login__p__strong');
var acessar = document.querySelector('.modalDadosLogin');

login.addEventListener('click', function(){
	acessar.classList.add('active');
})

document.querySelector('.modalDadosLogin__center__h4').addEventListener('click', function(){
	acessar.classList.remove('active');
})
console.log("modallogin");

//FIM -----------------------------------------




//LOGIN

function logar(){
	var emailLogin = document.getElementById("loginEmail");
	var senhaLogin = document.getElementById("loginSenha");

	if(emailLogin.value == "admin@admin.com" && senhaLogin.value == "admin"){
		localStorage.setItem("acesso", true);
		window.location.href = "dashboard.html";

	}else{
		alert("E-mail ou senha inválidos!")
	}
}

//FIM -----------------------------------------




//CADASTRAR USUÁRIO (LOCAL STORAGE)

function cadastrarUsuario(){
	var produtoMatricula = document.getElementById("produtoMatricula");
	var produtoTipo = document.getElementById("produtoTipo");
	var produtoNome = document.getElementById("produtoNome");
	var produtoRG = document.getElementById("produtoRG");
	var produtoPlaca = document.getElementById("produtoPlaca");
	var produtoVeiculo = document.getElementById("produtoVeiculo");

	var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

	if(dados == null){
		localStorage.setItem("dadosUsuario", "[]");
		dados = [];
	}

	var auxCadastro = {
		matricula:produtoMatricula.value,
		tipo:produtoTipo.value,
		nome:produtoNome.value,
		rg:produtoRG.value,
		placa:produtoPlaca.value,
		veiculo:produtoVeiculo.value
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