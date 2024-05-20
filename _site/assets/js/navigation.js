const $loader = document.querySelector('.loader');

const init = () => {
    const $navigation = document.querySelector('.nav-hamburger');
    const $navOverlay = document.querySelector('.nav-overlay');

    const openNav = (e) => {
        e.preventDefault();
        $navigation.classList.toggle('overlay');
        $navOverlay.classList.toggle('open');
    };

    const closeNav = () => {
        $navigation.classList.remove('overlay');
        $navOverlay.classList.remove('open');
    };

    $navigation.addEventListener('click', openNav);

    // Add event listeners to each link in the hamburger navigation
    const navLinks = document.querySelectorAll('.solo-list-open a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });


}

init();
