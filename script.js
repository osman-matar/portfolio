function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
function toggleSideBar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.transform = sidebar.style.transform === 
        'translateX(0px)' ?   'translateX(-300px)' : 'translateX(0px)';
}