document.addEventListener('DOMContentLoaded', () => {
    const giftImages = {
    'anklets.jpg': 'BEAUTIFUL ANKLETS',
    'badminton.jpg': 'BADMINTON SET',
    'bracelets.jpg': 'ELEGANT BRACELETS',
    'chocolates.jpg': 'DELICIOUS CHOCOLATES',
    'clatchure.webp': 'FANCY CLUTCH PURSE',
    'crystalball.png': 'CRYSTAL BALL',
    'earings.jpg': 'STYLISH EARRINGS',
    'face_powder.webp': 'FACE POWDER',
    'hairserum.png': 'HAIR SERUM',
    'headphone.jpg': 'WIRELESS HEADPHONES',
    'makeupkit.png': 'COMPLETE MAKEUP KIT',
    'pendant.jpg': 'BEAUTIFUL PENDANT',
    'perfume.png': 'LUXURY PERFUME',
    'skin toner.webp': 'REFRESHING SKIN TONER',
    'purse.jpg': 'BEAUTIFUL PURSE',
    'Cadburry.jpeg': 'BEAUTIFUL GIFT FOR YOU',
    'watch.webp': 'WATCH AND BRACELETS FOR QUEEN',
    'Crown.jpg': 'CROWN FOR PRINCESS',
    'ring.jpg': 'PRINCESS RING FOR PRINCESS LIKE YOU',
    'couple.jpg': 'ONLY FOR YOU AND JIJU',
};

const giftsData = Object.entries(giftImages).map(([filename, title]) => {
    return {
        title,
        image: `../images/gifts/${filename}`,
    };
});


    const giftsGrid = document.getElementById('giftsGrid');
    giftsGrid.innerHTML = '';

    // Create bottom content container (hidden for now)
    const bottomContent = document.createElement('div');
    bottomContent.className = 'bottom-gift-content';
    bottomContent.style.display = 'none';
    document.querySelector('.container').appendChild(bottomContent);

    // Create gift boxes
    giftsData.forEach((gift, index) => {
        const giftBox = document.createElement('div');
        giftBox.className = 'gift-box';
        giftBox.id = `gift-box-${index + 1}`;  // Unique ID for each gift box
        giftBox.style.animationDelay = `${index * 0.2}s`;

        giftBox.innerHTML = `
            <div class="gift-wrapper">
                <img 
                    src="../images/gifts/gift-box.png" 
                    alt="Gift Box ${index + 1}" 
                    class="gift-box-image"
                    id="gift-img-${index + 1}"
                    title="Click to open gift #${index + 1}"
                >
            </div>
        `;

        // Hover effect
        giftBox.addEventListener('mouseenter', () => {
            giftBox.style.transform = 'scale(1.05) translateY(-10px)';
        });
        giftBox.addEventListener('mouseleave', () => {
            giftBox.style.transform = 'scale(1) translateY(0)';
        });

        // Click event redirects to gift-detail page with the actual gift image
        giftBox.addEventListener('click', () => {
            if (typeof audioPlayer !== 'undefined') {
                audioPlayer.playGiftSound();
            }
            const topImage = gift.image;
            const bottomImage = '../images/gifts/Gift_bottom.png';
                 // gift-specific image
            const url = `gift-detail.html?top=${encodeURIComponent(topImage)}&bottom=${encodeURIComponent(bottomImage)}`;
            window.location.href = url;
        });

        giftsGrid.appendChild(giftBox);
    });
});
