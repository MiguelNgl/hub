// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the text element and the div by their IDs
    const changeColorText = document.getElementById('changeColorText');
    const mainDiv = document.getElementById('main-panel');
    const leftDiv = document.getElementById('left-panel');
    const rightDiv = document.getElementById('right-panel');
    const buttons = document.getElementsByClassName('button');

    // Function to apply night mode
    function applyNightMode() {
        mainDiv.style.color = 'white';
        mainDiv.style.backgroundColor = '#070F2B';
        leftDiv.style.backgroundColor = '#070F2B';
        rightDiv.style.backgroundColor = '#070F2B';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = '#070F2B';
            buttons[i].style.color = 'white';
        }
        changeColorText.textContent = 'Day Mode'; // Update button text
    }

    // Function to apply day mode
    function applyDayMode() {
        mainDiv.style.color = 'black';
        mainDiv.style.backgroundColor = 'white';
        leftDiv.style.backgroundColor = 'white';
        rightDiv.style.backgroundColor = 'white';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'white';
            buttons[i].style.color = 'black';
        }
        changeColorText.textContent = 'Night Mode'; // Update button text
    }

    // Check the saved mode in localStorage and apply it, defaulting to night mode
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode === 'night') {
        applyNightMode();
    } else {
        applyDayMode();

    }
    // Add a click event listener to the text element
    changeColorText.addEventListener('click', () => {
        // Toggle between night and day mode based on the saved mode
        const currentMode = localStorage.getItem('colorMode');
        if (currentMode === 'day') {
            applyNightMode();
            localStorage.setItem('colorMode', 'night');
        } else {
            applyDayMode();
            localStorage.setItem('colorMode', 'day');
        }
    });
});
