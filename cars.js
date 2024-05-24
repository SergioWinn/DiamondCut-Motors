document.addEventListener("DOMContentLoaded", function() {
    const brandLists = document.querySelectorAll(".brand-list");
    const burgerMenu = document.getElementById('burgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');

    burgerMenu.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    brandLists.forEach((list) => {
        const firstList = list.querySelector(".brand-list-first");
        const secondList = list.querySelector(".brand-list-second");

        // Function to toggle between first and second lists with smooth transition
        function toggleBrandLists() {
            if (firstList.style.opacity === "1" || firstList.style.opacity === "") {
                firstList.style.opacity = "0";
                setTimeout(() => {
                    firstList.style.display = "none";
                    secondList.style.display = "flex";
                    setTimeout(() => {
                        secondList.style.opacity = "1";
                    }, 10);
                }, 300);
            } else {
                secondList.style.opacity = "0";
                setTimeout(() => {
                    secondList.style.display = "none";
                    firstList.style.display = "flex";
                    setTimeout(() => {
                        firstList.style.opacity = "1";
                    }, 10);
                }, 300); 
            }
        }

        firstList.style.opacity = "1";
        firstList.style.display = "flex";
        secondList.style.opacity = "0";
        secondList.style.display = "none";

        setInterval(toggleBrandLists, 2500);
    });
});
