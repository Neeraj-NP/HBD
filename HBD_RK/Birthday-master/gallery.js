document.addEventListener('DOMContentLoaded', () => {
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create image modal if it doesn't exist in the DOM
    // This check ensures we don't create multiple modals if the script runs again
    if (!document.getElementById('imageModal')) {
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        // Add the image element inside the modal
        modal.innerHTML = `
            <img class="modal-image" alt="Full size image">
        `;
        document.body.appendChild(modal);

        // Add event listener to close the modal when clicked anywhere on it
        modal.addEventListener('click', () => {
            modal.classList.remove('active'); // Deactivate the modal to hide it
        });
    }

    // Add click handlers to each gallery item to open the modal
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const modal = document.getElementById('imageModal');
            const modalImage = modal.querySelector('.modal-image');
            
            // Find the actual image element within the clicked gallery item
            const clickedImage = item.querySelector('img');

            // Check if an image was found to prevent errors
            if (clickedImage) {
                // Set the modal image's src and alt attributes from the clicked image
                modalImage.src = clickedImage.src;
                modalImage.alt = clickedImage.alt;
                
                // Add the 'active' class to display the modal with its fade-in animation
                modal.classList.add('active');
            } else {
                // Log an error if no image is found in the clicked gallery item
                console.error('No image found in the clicked gallery item.');
            }
        });
    });

    // Note: The `animateElement` function is not defined in the provided code.
    // If you have it in `common.js` or another linked script, it will work.
    // Otherwise, the `mouseenter` event listener for hover effects will not function.
    // For now, I've commented out the `animateElement` calls to prevent errors.
    /*
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // animateElement(item, 'pulse 0.5s ease');
        });
    });
    */
});
