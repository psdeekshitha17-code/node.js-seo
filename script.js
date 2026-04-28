document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("search");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let links = document.querySelectorAll(".card");

        links.forEach(link => {
            let text = link.textContent.toLowerCase();

            if (text.includes(filter)) {
                link.style.display = "block";
            } else {
                link.style.display = "none";
            }
        });
    });

});