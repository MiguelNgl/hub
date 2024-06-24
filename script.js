// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the text element and the div by their IDs
    const changeColorText = document.getElementById('changeColorText');
    const mainDiv = document.getElementById('main-panel');
    const leftDiv = document.getElementById('left-panel');
    const rightDiv = document.getElementById('right-panel');
    const buttons = document.getElementsByClassName('button');

    // Add a click event listener to the text element
    changeColorText.addEventListener('click', () => {
        // Check the current background color and toggle it
        if (mainDiv.style.backgroundColor === 'white') {
            mainDiv.style.color = 'white'; 
            mainDiv.style.backgroundColor = '#070F2B';
            leftDiv.style.backgroundColor = '#070F2B';
            rightDiv.style.backgroundColor = '#070F2B';

            // Iterate over the buttons collection and change background color
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = '#070F2B';
                buttons[i].style.color = 'white';
            }
        } else {
            mainDiv.style.color = 'black'; 
            mainDiv.style.backgroundColor = 'white'; 
            leftDiv.style.backgroundColor = 'white'; 
            rightDiv.style.backgroundColor = 'white'; 

            // Iterate over the buttons collection and change background color
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = 'white';
                buttons[i].style.color = 'black';
            }
        }
    });
});
