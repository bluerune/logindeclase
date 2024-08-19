function login(){
    //Desarrolla aquí la función del botón para la validación de datos y redirección a index.html

    // 1. Obtén los valores de los campos de entrada "username" y "password" por su ID.
    
    // 2. Verifica si ambos campos tienen valores. Puedes usar una condición if.

    // 3. Si ambos campos están completos:
    //    - Almacena el estado de inicio de sesión en sessionStorage usando sessionStorage.setItem.
    //    - Guarda el nombre de usuario en localStorage usando localStorage.setItem.
    //    - Redirige al usuario a index.html usando window.location.href.

    // 4. Si uno o ambos campos están vacíos, muestra una alerta indicando que deben completarse todos los campos.

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (!username.value || !password.value){
        alert("Los campos no pueden estar vacios");
    } else {
        sessionStorage.setItem("session", "loggedin");
        localStorage.setItem("userlogged", username);
        window.location.href = "./index.html";
    }
    }