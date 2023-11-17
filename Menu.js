

function toggleMenu() {
    const menu = document.querySelector('.menu');

    if (menu.style.left === '-300px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-300px';
    }
}

/* Custom Cursor */
const toggleCursorButton = document.getElementById('toggle-cursor');

toggleCursorButton.addEventListener('click', function() {
    document.body.classList.toggle('custom-cursor');
});

function toggleCursor() {
    const body = document.querySelector('body');

    if (body.classList.contains('custom-cursor')) {
        body.classList.remove('custom-cursor');
    } else {
        body.classList.add('custom-cursor');
    }
}

/* Modern and Classic Toggle */
/*
document.getElementById('theme-toggle').addEventListener('click', function() {
    let themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'modern.css') {
        themeStyle.setAttribute('href'), 'classic.css';
    } else {
        themeStyle.getAttribute('href') = 'modern.css';
    }
});
*/
// The above code is an alternative to the below code
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');

    if (themeStyle.getAttribute('href') === 'classic.css') {
        themeStyle.setAttribute('href', 'modern.css');
    } else {
        themeStyle.setAttribute('href', 'classic.css');
    }
}

// When the document is fully loaded, check for the theme cookie (a saved theme preference)
document.addEventListener('DOMContentLoaded', function() {
    const themeStyle = document.getElementById('theme-style');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStyle.setAttribute('href', savedTheme);
    }
});


