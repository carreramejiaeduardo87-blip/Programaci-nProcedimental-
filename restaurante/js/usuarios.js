function validarInformacion() {
    let name = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipo_documento = document.getElementById("tipo_documento").value;
    let num_documento = document.getElementById("num_documento").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let contraseña = document.getElementById("contraseña").value;


    if (!name || !apellido || !tipo_documento || !num_documento || !telefono || !correo || !genero || !cargo || !fecha_nacimiento || !contraseña) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        if (!/^[a-zA-Z]+$/.test(name)) {
            console.log("Nombre debe contener letras")
            Swal.fire({
                title: "Nombre debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(apellido)) {
            console.log("Apellido debe contener letras")
            Swal.fire({
                title: "Apellido debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(tipo_documento)) {
            console.log("Tipo de documento debe contener letras")
            Swal.fire({
                title: "Tipo de documento debe contener letras",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(num_documento)) {
            console.log("Número de documento debe contener números")
            Swal.fire({
                title: "Número de documento debe contener números",
                icon: "error"
            });
            return;
        }
        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(telefono)) {
            console.log("Telefono debe contener números")
            Swal.fire({
                title: "Telefono debe contener números",
                icon: "error"
            });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$$/.test(correo)) {
            console.log("Correo debe ser un correo electrónico válido")
            Swal.fire({
                title: "Correo debe ser un correo electrónico válido",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z0-9_]{3,16}$/.test(genero)) {
            console.log("Género debe contener letras, números y guiones bajos")
            Swal.fire({
                title: "Género debe contener letras, números y guiones bajos",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z]+$/.test(cargo)) {
            console.log("Cargo debe contener letras")
            Swal.fire({
                title: "Cargo debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(fecha_nacimiento)) {
            console.log("Fecha de nacimiento no es válida")
            Swal.fire({
                title: "Fecha de nacimiento no es válida",
                icon: "error"
            });
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contraseña)) {
            console.log("Contraseña no es válida")
            Swal.fire({
                title: "Contraseña no es válida",
                icon: "error"
            });
            return;
        }
        console.log(
            `Informacion del Producto: \n
            ${nombre} \n
            ${apellido} \n
            ${tipo_documento} \n
            ${num_documento} \n
            ${telefono} \n
            ${correo} \n
            ${genero} \n
            ${cargo} \n
            ${fecha_nacimiento} \n
            ${contraseña}`
        );

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}
document.getElementById("guardar").onclick = validarInformacion;
