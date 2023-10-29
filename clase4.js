const usuario = {
    Nombre : "Sadia",
    Contraseña : "admin123",
    Capital : 0,
}

function validar (nombre, contraseña){
    if (nombre === usuario.Nombre && contraseña === usuario.Contraseña) {
        alert ('Login exitoso¡¡');
        forn.hidden = true;
        datos.hidden = false;
        document.getElementById('capital').innerHTML = 'Capital : ' + usuario.Capital
    } else if (nombre === '' || contraseña === '') {
        alert ('Se tienen que completar los campos')
    } else {
        alert ('Los datos son errados')
    }
}

document.getElementById('btn').addEventListener('click', function (){
    let nombre = document.getElementById('user').value;
    let contraseña = document.getElementById('pass').value;

    validar (nombre, contraseña);
})

function capital (dinero){
  usuario.Capital  = usuario.Capital + dinero
  document.getElementById('capital').innerHTML = 'Capital : ' + usuario.Capital
}


document.getElementById('ingresar').addEventListener('click', function (){

    let dinero = parseInt(document.getElementById('añadir').value);
    capital (dinero)

})