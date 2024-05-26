 // Toggle sidebar
 function toggleSidebar(show) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.style.display = show ? 'flex' : 'none';
    overlay.style.display = show ? 'block' : 'none';

    sidebar.setAttribute('aria-hidden', !show);
    if (show) {
        // Focus Management: When the sidebar is shown, the focus is moved to the close button inside the sidebar
        sidebar.querySelector('button').focus();
    }
}

// Provide styling for Current Page Anchor Tag
const navLinks = document.querySelectorAll('nav li a');
navLinks.forEach((link) => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
        console.log('link', link.href);
        console.log('Window', window.location.href);
    }
})

// Close sidebar when resizing to larger screens
window.addEventListener('resize', function () {
    if (window.innerWidth > 800) {
        toggleSidebar(false);
    }
});


// Navigate using the down arrow key or Tab key
document.addEventListener('keydown', function (event) {

    // Click Escape to close the sidebar
    if (event.key === 'Escape') {
        toggleSidebar(false);

        //Checking for the Arrow Down Key or Tab key
    } else if (event.key === 'ArrowDown' || event.key === 'Tab') {

        //Checking if the Sidebar is Open
        const sidebar = document.querySelector('.sidebar');

        if (sidebar.style.display === 'flex') {

            // Selecting Links and the Close Button
            const links = sidebar.querySelectorAll('.sidebar-menu a');
            const closeButton = sidebar.querySelector('.close-btn');

            // Finding the Active Element
            // -- document.activeElement returns the currently focused element in the document. 
            const activeElement = document.activeElement;
            // -- The index variable finds the position of the activeElement within the links NodeList by converting the NodeList to an array with Array.from(links) and using indexOf.
            let index = Array.from(links).indexOf(activeElement);

            //Moving Focus to the Next Link or Close Button
            if (index !== -1 && index < links.length - 1) {
                links[index + 1].focus();
                event.preventDefault();
            } else if (index === links.length - 1) {
                closeButton.focus();
                event.preventDefault();
            }
        }
    }
});
