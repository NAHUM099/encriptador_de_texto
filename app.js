function textoEncriptado() {
    let texto = document.getElementById("ingresoDeTexto").value;
    let encriptarTexto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById("salidaDeTexto").value = encriptarTexto;
}

function textoDesencriptado() {
    let texto = document.getElementById("ingresoDeTexto").value;
    let decryptedText = texto.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("salidaDeTexto").value = decryptedText;
}

function textoCopiado() {
    let salidaDeTexto = document.getElementById("salidaDeTexto");
    salidaDeTexto.select();
    salidaDeTexto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + salidaDeTexto.value);
}

