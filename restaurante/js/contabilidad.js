function validarInformacion() {
    let valor = document.getElementById("valor").value;
    let fechas = document.getElementById("fechas").value;
    let concepto = document.getElementById("concepto").value;
    let egresos = document.getElementById("egresos").value;
    let ingresos = document.getElementById("ingresos").value;

    if (!valor || !fechas || !concepto || !egresos || !ingresos) {
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
            ${valor} \n
            ${fechas} \n
            ${concepto} \n
            ${egresos} \n
            ${ingresos}`
        );
    }

    if (!/^\d+$/.test(valor)) {
        console.log("Valor debe contener números")
        Swal.fire({
            title: "Valor debe contener números",
            icon: "error"
        });
        return;
    }
    if (/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(fechas)) {
        Swal.fire({
            title: "Fechas debe contener números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-Z]+$/.test(concepto)) {
        console.log("Concepto debe contener letras")
        Swal.fire({
            title: "Concepto debe contener letras",
            icon: "error"
        });
        return;
    }
    if (!/^\d+$/.test(egresos)) {
        Swal.fire({
            title: "Egresos debe contener números",
            icon: "error"
        });
        return;
    }
    if (!/^\d+$/.test(ingresos)) {
        console.log("Ingresos debe contener números")
        Swal.fire({
            title: "Ingresos debe contener números",
            icon: "error"
        });
        return;
    }

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
document.getElementById("guardar").onclick = validarInformacion;

