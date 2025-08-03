const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    // Login logic
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        // Simple fake login (accept any username/password)
        loginView.style.display = 'none';
        dashboardView.style.display = '';
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        dashboardView.style.display = 'none';
        loginView.style.display = '';
        loginForm.reset();
    });

    // Sidebar toggle logic
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
    });

    // Window control buttons for Windows look
    document.getElementById('win-min').addEventListener('click', () => ipcRenderer.send('minimize-app'));
    document.getElementById('win-max').addEventListener('click', () => ipcRenderer.send('maximize-app'));
    document.getElementById('win-close').addEventListener('click', () => ipcRenderer.send('close-app'));
});
