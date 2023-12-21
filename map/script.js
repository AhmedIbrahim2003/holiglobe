document.querySelectorAll(".allPaths").forEach(e => {
    e.addEventListener("mouseover", function () {
        window.onmousemove = function (j) {
            x = j.pageX
            y = j.pageY
            document.getElementById('name').style.top = y - 40 + 'px'
            document.getElementById('name').style.left = x + 10 + 'px'
        }
        document.getElementById("name").style.opacity = 1
        document.getElementById("namep").innerText = e.id
    })
    e.addEventListener("mouseleave", function () {
        document.getElementById("name").style.opacity = 0
    })

    e.addEventListener("click", function () {
        const url = `/${e.id}/index.html`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    window.location.assign(url);
                } else {
                    window.location.assign("/Under-Dev/index.html");
                }
            })
    });
});

let button = document.getElementById("get-started");

let button2 = document.getElementById("get-started2");

let contact = document.getElementById("contact-btn");

button.addEventListener("click", () => window.scrollTo({ top: 1031, behavior: 'smooth' })
);

button2.addEventListener("click", () => window.scrollTo({ top: 1031, behavior: 'smooth' })
);

contact.addEventListener("click", () => window.scrollTo({ top: 2000, behavior: 'smooth' })
);