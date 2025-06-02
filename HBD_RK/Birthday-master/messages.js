document.addEventListener('DOMContentLoaded', () => {
    const messagesData = [
        {
            title: 'Wish 1(S)',
            // message: 'Happy Birthday to the most amazing person I know! May your special day be filled with endless joy, laughter, and all the love your heart can hold. You deserve all the happiness in the world!',
            message: "Happy birthday rakshita🥳🥳🥳🎂🎂🎂🤩🤩🤩❤❤❤ May God fulfill all your wishes and bless you in every aspect of life with all the happiness you desire🥰🥰. Thankyou for being my friend and supporting me whenever I needed🤗🤗🥰🥰🫶🫶. No matter how thing will unfold in future but I will always appreciate the moments of our friendship❤❤. Once again many many happy return of the day🥳🥳🥳🥳🥳🥰",
            author: '💝💖Shalu💝💖',
            cardColor: '#FF69B4'
        },
        {
            title: 'Wish 2(S)',
            message: 'Wish u very happy birthday Rakshu🩷...Yet it is a long journey but the memories we made till now are one of the most favourite....Enjoy ur day🥳',
            author: '💝💖Sai💝💖',
            cardColor: '#FFD700'
        },
        {
            title: 'Wish 3(A)',
            message: "🎂❤🎉Happy Birthday, my dear friend!🎉🎁 May your day be filled with love, laughter, and unforgettable memories. 😊🎉🎊🥳You deserve all the happiness.😊🎁🎉🎊🥳. Wishing you again a day filled with cake, joy, and all the good vibes.",
            author: '💝💖Aakanksha💝💖',
            cardColor: '#FF6B6B'
        },
        {
            title: 'Wish 4(R)',
            // message: 'Today we celebrate not just your birthday, but the beautiful soul that you are. Your kindness, warmth, and amazing spirit make the world a better place. Have the most fantastic birthday ever!',
            message: "Happy B'day 🎉🎂🥳Rakshita ❤😊. Wishing you an amazing day filled with all the happiness, laughter, and unforgettable moments you deserve! You bring so much light and positivity to those around you,May this year be full of new adventures, success, and joy. Enjoy every bit of your special day! 🎂✨🫠. One again happy b'day",
            author: '💝💖Ravi(Bittu)💝💖',
            cardColor: '#4ECDC4'
        },
        {
            title: 'Wish 5(P)',
            message: 'Happy Birthday! May your day be as bright as your smile, as sweet as your heart, and as wonderful as you are. Thank you for being such an incredible person and friend. Celebrate big today!',
            message: "Happy Birthday, Rakshita! 🎂✨.Wishing you a beautiful day filled with peace, joy, and everything that makes you smile 💖. May this year bring you exciting opportunities, sweet moments, and all the success you have been working for 🌱🚀. You truly deserve the best — laughter that lasts, memories worth keeping, and dreams coming true one by one 🌈📚. Enjoy every bit of your special day, and keep being the amazing person you are 🌸😊. Once again, happiest birthday to you! 🥳",
            author: '💝💖Pawan💝💖',
            cardColor: '#A8E6CF'
        },
        {
            title: 'Wish 6(N)',
            message: 'Another year, another cheer, A day that brings your joy so near.With every laugh and every smile,You make our lives so much worthwhile. May your dreams grow wings and fly,Just like stars up in the sky.Happy birthday, my amazing friend,May your happiness never end!',
            author: '💝💖Neeraj💝💖',
            cardColor: '#87CEEB'
        },
        {
            title: 'Wish 7(D)',
            message: "Happy Birthday, Rakshita! Wishing you a day filled with laughter, love, and all the happiness your heart can hold. May every step you take lead you to success, joy, and beautiful memories. Keep shining like the star you are — the world is a brighter place with you in it! 🌟\nLots of love and hugs!💖",
            author: '💝💖Disha💝💖',
            cardColor: '#DDA0DD'
        },
        {
            title: 'Wish 8(M)',
            message: 'Sending you sunshine for the new year ahead, good health, good cheer, and lots of reasons to smile. Happy Birthday to someone who makes life brighter!',
            author: '💝💖Manoj💝💖',
            cardColor: '#F0E68C'
        },
        {
            title: 'Wish 9(B)',
            message: "Happy Birthday, Rakshita! 🎉✨. May this new year bring you closer to your dreams 🌠, surprise you with beautiful moments 🌸, and reward all your hard work with amazing opportunities 🎯. You deserve nothing but happiness , meaningful connections 🤗, and experiences that fill your heart with joy 💫. Keep shining your light and being the incredible person you are! Wishing you the most magical birthday 🎂 and an absolutely fantastic year ahead!",
            author: '💝💖Bhagwati(Bhanu)💝💖',
            cardColor: '#98FB98'
        }
    ];

    const messagesContainer = document.querySelector('.messages-container');
    messagesContainer.innerHTML = '';

    messagesData.forEach((messageData, index) => {
        const card = document.createElement('div');
        card.className = 'wish-card';
        card.style.animationDelay = `${index * 0}s`;
        card.style.setProperty('--card-color', messageData.cardColor);
        
        card.innerHTML = `
            <div class="wish-card-front">
                <div class="card-title">${messageData.title}</div>
                <div class="card-decoration">🎉</div>
                <div class="click-hint">Click to Open</div>
            </div>
        `;

        card.addEventListener('click', () => {
            if (!card.classList.contains('opening')) {
                openWishCard(messageData, card);
            }
        });

        messagesContainer.appendChild(card);
    });

    function openWishCard(messageData, cardElement) {
        cardElement.classList.add('opening');
        
        // Create full screen wish overlay
        const wishOverlay = document.createElement('div');
        wishOverlay.className = 'wish-overlay';
        
        wishOverlay.innerHTML = `
            <div class="wish-card-container">
                <div class="scroll-top-roller"></div>
                <div class="wish-card-scroll">
                    <div class="paper-edge-top"></div>
                    <div class="scroll-header" style="background: ${messageData.cardColor}">
                        <h2>${messageData.title}</h2>
                    </div>
                    <div class="wish-content">
                        <p class="wish-message">${messageData.message}</p>
                        <div class="wish-author">- ${messageData.author}</div>
                        <button class="close-wish-btn">Close</button>
                    </div>
                    <div class="paper-edge-bottom"></div>
                </div>
                <div class="scroll-bottom-roller"></div>
            </div>
        `;
        
        document.body.appendChild(wishOverlay);
        
        // Trigger rolling animation after 2-5 seconds delay
        const delay = 100 + Math.random() * 3000;
        setTimeout(() => {
            wishOverlay.classList.add('show');
            setTimeout(() => {
                wishOverlay.classList.add('open-card');
            }, 50);
        }, delay);
        
        // Close functionality
        const closeBtn = wishOverlay.querySelector('.close-wish-btn');
        closeBtn.addEventListener('click', () => {
            wishOverlay.classList.add('closing');
            setTimeout(() => {
                document.body.removeChild(wishOverlay);
                cardElement.classList.remove('opening');
            }, 800);
        });
        
        // Close on overlay click
        wishOverlay.addEventListener('click', (e) => {
            if (e.target === wishOverlay) {
                closeBtn.click();
            }
        });
    }

});
