// JavaScript code for toggling the sidebar visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('aside');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
    });
});
