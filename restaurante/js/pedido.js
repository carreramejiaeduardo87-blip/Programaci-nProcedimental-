function validarInformacion() {
    let producto = document.getElementById("producto").value;
    let cod_producto = document.getElementById("cod_producto").value;
    let name_producto = document.getElementById("name_producto").value;
    let direccion = document.getElementById("direccion").value;
    let name_usuario = document.getElementById("name_usuario").value;
    let cantidad = document.getElementById("cantidad").value;
    let met_pago = document.getElementById("met_pago").value;
    let valor_cancelar = document.getElementById("valor_cancelar").value;
    let telefono = document.getElementById("telefono").value;
    

    if (!producto || !name_producto || !direccion || !name_usuario || !cantidad || !met_pago || !valor_cancelar || !telefono) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${producto} \n
            ${cod_producto} \n
            ${name_producto} \n
            ${direccion} \n
            ${name_usuario} \n
            ${cantidad} \n
            ${met_pago} \n
            ${valor_cancelar} \n
            ${telefono}`
        );
    }


    if (!/^[a-zA-Z]+$/.test(producto)) {
        console.log("Nombre debe contener letras")
        Swal.fire({
            title: "Nombre debe contener letras",
            icon: "error"
        });
        return;
    }

    if (!/^\d+$/.test(cod_producto)) {
        console.log("Valor debe contener números")
        Swal.fire({
            title: "Valor debe contener números",
            icon: "error"
        });
        return;
    }
    if (!/^[a-zA-Z]+$/.test(name_producto)) {
        console.log("Nombre debe contener letras")
        Swal.fire({
            title: "Nombre debe contener letras",
            icon: "error"
        });
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(direccion)) {
        console.log("Direccion debe ser un correo electrónico válido")
        Swal.fire({
            title: "Direccion debe ser un correo electrónico válido",
            icon: "error"
        });
        return;
    }
    if (!/^[a-zA-Z0-9_]{3,16}$/.test(name_usuario)) {
        console.log("Nombre de usuario debe contener letras, números y guiones bajos")
        Swal.fire({
            title: "Nombre de usuario debe contener letras, números y guiones bajos",
            icon: "error"
        });
        return;
    }
    if (!/^\d+$/.test(cantidad)) {
        console.log("Cantidad debe contener números")
        Swal.fire({
            title: "Cantidad debe contener números",
            icon: "error"
        });
        return;
    }
    if (!/^[a-zA-Z]+$/.test(met_pago)) {
        console.log("Metodo de pago debe contener letras")
        Swal.fire({
            title: "Metodo de pago debe contener letras",
            icon: "error"
        });
        return;
    }
    if (!/^\d+$/.test(valor_cancelar)) {
        console.log("Valor a cancelar debe contener números")
        Swal.fire({
            title: "Valor a cancelar debe contener números",
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
        return;
    

    {
    Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

