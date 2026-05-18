document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navList = document.querySelector(".nav_list");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // close menu on click (mobile UX fix)
    document.querySelectorAll(".nav_list a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });
});