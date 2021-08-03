function checkcont(){
  var nome = formUser.nome.value;
  var email = formUser.email.value;
  var tel = formUser.telefone.value;
  var msg = formUser.mensagem.value;

  if (nome == "") {
    alert("Por favor, digite o seu nome!");
    formUser.nome.focus();
    return false;
  } 
  if (email == "" || email.indexOf("@") == -1) {
    alert("Por favor, digite um E-mail válido!");
    formUser.email.focus();
    return false;
  }
  if (tel == "") {
    alert("Por favor, digite um número de telefone!");
    formUser.tel.focus();
    return false;
  }
  if (msg == "") {
    alert("Por favor, digite uma mensagem!");
    formUser.msg.focus();
    return false;
  }
}