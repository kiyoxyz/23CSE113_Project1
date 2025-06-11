const links = document.querySelectorAll('a[href^=""]');
const overlay = document.createElement('div');
overlay.id = 'transition-overlay';
document.body.appendChild(overlay);

links.forEach(link => {
    if (link.hostname === window.location.hostname) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    }
});

document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
}, 100);
