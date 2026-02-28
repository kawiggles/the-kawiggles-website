document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;
    console.log("currentPath:", currentPath);

    links.forEach(link => {
        const href = link.getAttribute("href");
        console.log("Checking link:", href);
        // The whole nas string thing is only need for testing, it will not work once hosted online
        if (href === currentPath) {
            link.classList.add("active");
            console.log("Added active class to:", link);
        };
    });
});