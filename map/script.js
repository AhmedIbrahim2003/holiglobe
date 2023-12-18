document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);
    e.addEventListener("mouseover", function () {
        window.onmousemove = function (j) {
            x = j.clientX
            y = j.clientY
            document.getElementById('name').style.top = y - 60 + 'px'
            document.getElementById('name').style.left = x + 10 + 'px'
        }
        const classes = e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country => {
            country.style.fill = "#7DDEF2"
        })
        document.getElementById("name").style.opacity = 1

        document.getElementById("namep").innerText = e.id
    })
    e.addEventListener("mouseleave", function () {
        const classes = e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country => {
            country.style.fill = "#ececec"
        })
        document.getElementById("name").style.opacity = 0
    })

    e.addEventListener("click", function () {
        const url = `/${e.id}/index.html`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    window.location.assign("/Under-Dev/index.html");
                } else {
                    console.log(url);
                    window.location.assign(url);
                }
            })
    });
});