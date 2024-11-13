document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Formato vCard para contacto
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
ADR:${address}
END:VCARD
    `;

    // Generar código QR
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // Limpiar QR anterior
    QRCode.toCanvas(qrContainer, vCard, { width: 200, margin: 1 }, function (error) {
        if (error) console.error(error);
        console.log("Código QR generado");
    });
});
