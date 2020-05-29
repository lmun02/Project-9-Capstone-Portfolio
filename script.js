/*---Variable---*/ 
const alertBanner = document.getElementById("alert");

/*---Alert Banner*/ 
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
    <h5><strong>Alert!</strong> Subsribe below to keep updated with new projects. </h5>
    <p class="alert-close">x</p>
    </div>
    `;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-close")) {
        alertBanner.style.display = "none";
    }
});