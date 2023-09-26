document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("popup").style.display = "block";
    }, 10000); // Mostrar el anuncio emergente después de 10 segundos

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });
});

