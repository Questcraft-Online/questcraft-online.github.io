function toggleMode() {
    const body = document.body;
    const profileCard = document.querySelector('.profile-card');
    const modeCard = document.querySelector('.mode-card');
    const leftSidebar = document.querySelector('.left-sidebar');
    const midScreen = document.querySelector('.middle-screen');
    const skillsCard = document.querySelector('.skills-card');

    if (document.getElementById('mode-toggle').checked) {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
}
