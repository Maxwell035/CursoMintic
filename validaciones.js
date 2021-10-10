  function validarRegistro() {
    
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      nombre.focus()
      return false;
    }
    if(apellidos.length == 0) {
        alert('No has escrito nada en apellidos');
        apellidos.focus()
        return false;
      }
    var password = document.getElementById('password').value;
    if (password.length < 8) {
      alert('Debes ingresar una clave con más de 8 dígitos');
      password.focus()
      return false;
    }
    var confPassword= document.getElementById('confPassword').value;
    if(password!=confPassword){
        alert("Las contraseñas no coinciden");
        confPassword.focus();
        return false;
    }
    var email=document.formRegistro.correo
    let formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; 
      if (!formato_email.test(email)) { 
        alert("Debes ingresar un email electronico valido!"); 
        email.focus(); 
        return false;
    }
    this.submit();
  }

  function validarLogin(){
    var username=document.getElementById('usuario').value;
    if(username.length<6){
        alert('Usuario no válido, debe tener un mínimo de 6 carácteres')
    }
    var password=document.getElementById('password').value;
    if(password.length<8){
        alert('Contraseña no válida, debe tener mínimo 8 carácteres')
        }
}