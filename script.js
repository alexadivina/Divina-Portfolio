lucide.createIcon("settings", {
    viewBox: "0 0 24 24",
    paths: []
})

const sections =
document.querySelectorAll('section');
const navlinks =
document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
        const sectionPos = section.offsetTop - 90;
        if (window.scrollY >= sectionPos) {
            currentId = section.getAttribute('id');
        }
    });
    navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#${currentid}') {
        link.classList.add('active');
        }
    });
});
    