// toggle class active
const navbaritem = document.querySelector('.navbar-item');

// ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbaritem.classList.toggle('active');
};

// klik diluar untuk menghilangkan nav
const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbaritem.contains(e.target)) {
        navbaritem.classList.remove('active');
    }
});



const kegiatanContainer = document.querySelector('li#isikegiatan')
fetch('kegiatan.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let isiHTML = ''
        data.forEach(element => {
            isiHTML += `
            <li>
                <a href="#">${element.title}</a>
                <small>${element.date}</small>
            </li>
            `
        });
        console.log(isiHTML)
        kegiatanContainer.innerHTML = isiHTML
    })