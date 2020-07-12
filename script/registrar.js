function validar() {

   let nombre, apellido, correo, usuario, clave, telefono, expresion;

   nombre = document.getElementById('nombre').value;

   apellido = document.getElementById('apellido').value;

   correo = document.getElementById('correo').value;

   usuario = document.getElementById('usuario').value;

   clave = document.getElementById('clave').value;

   telefono = document.getElementById('telefono').value;

   expresion = /\w+@\w+\.+[a-z]/;

   if (nombre === "" || apellido === "" || usuario === "" || correo === "" || clave === "" || telefono === "") {
      alert('Todos los campos son obligatorios');
      return false;
   }

   else if (nombre.length > 30) {
      alert('El nombre es muy lagor');
      return false;
   }

   else if (apellido.length > 80) {
      alert('El apellido es muy lagor');
      return false;
   }

   else if (correo.length > 100) {
      alert('El correo es muy lagor');
      return false;
   }

   else if (!expresion.test(correo)) {
      alert('Correo no valido');
      return false;
   }

   else if (usuario.length > 20 || clave.length > 20) {
      alert('El usuario y la clave debe tener como maximo 20 carácteres');
      return false;
   }

   else if (telefono.length > 10) {
      alert('El telefono es muy largo');
      return false;
   }

   else if (isNaN(telefono)) {
      alert('El telefono ingresado no es un número');
      return false;
   }
}