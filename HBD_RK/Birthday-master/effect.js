$(window).load(function(){
    // --- Countdown Logic Start ---
    // IMPORTANT: SET THE ACTUAL BIRTHDAY DATE AND TIME HERE for deployment
    // For testing, setting to June 1, 2025, 00:00:00 AM IST.
    // To test the countdown, set this to a time a few minutes/seconds in the future.
    // To test the post-countdown state, set this to a time in the past.
    // Using current date for testing purposes as per instructions to ensure countdown reveals immediately.
    const birthdayDate = new Date('June 1, 2025 00:00:00'); // <--- CHANGE THIS FOR ACTUAL BIRTHDAY!

    const daysValue = $('#days-value');
    const hoursValue = $('#hours-value');
    const minutesValue = $('#minutes-value');
    const secondsValue = $('#seconds-value');
    const countdownContainer = $('#countdown-container');
    const body = $('body');
    const loadingOverlay = $('.loading');
    const mainContainer = $('.container'); // Assuming your main content is within .container

    // Function to add leading zero if number is less than 10
    function formatTime(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

    // Function to handle the reveal of content after countdown ends
    function revealBirthdayContent() {
        clearInterval(countdownInterval); // Stop the countdown from updating
        countdownContainer.fadeOut('slow', function() {
            loadingOverlay.fadeOut('fast', function() { // Fade out the loading overlay
                body.removeClass('hide-content'); // Remove the hiding class from body
                mainContainer.fadeIn('slow', function() {
                    // Ensure the 'Turn On Lights' button is visible immediately after content loads
                    // and any other initial buttons that should appear.
                    $('#turn_on').css('display', 'inline-block'); // Or .show() if using jQuery
                });
            });
        });
    }

    // Function to update the countdown
    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = birthdayDate.getTime() - currentTime;

        // Calculate time units, handling negative distance for past dates
        const days = Math.floor(Math.max(0, distance) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((Math.max(0, distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((Math.max(0, distance) % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((Math.max(0, distance) % (1000 * 60)) / 1000);

        if (distance < 0) {
            // If the countdown is over, reveal the content
            revealBirthdayContent();
        } else {
            // Otherwise, display the countdown
            daysValue.text(formatTime(days));
            hoursValue.text(formatTime(hours));
            minutesValue.text(formatTime(minutes));
            secondsValue.text(formatTime(seconds));
        }
    }

    // Initial check on page load: if birthday passed, reveal immediately
    if (new Date().getTime() >= birthdayDate.getTime()) {
        countdownContainer.hide(); // Hide countdown instantly
        loadingOverlay.hide(); // Hide loading instantly
        body.removeClass('hide-content'); // Reveal content
        mainContainer.show(); // Show main content
        $('#turn_on').css('display', 'inline-block'); // Ensure 'Turn On Lights' button is visible
    } else {
        // If birthday is in the future, start the countdown
        updateCountdown(); // Call once immediately to show initial values
        var countdownInterval = setInterval(updateCountdown, 1000); // Then update every second
    }
    // --- Countdown Logic End ---
});

$('document').ready(function(){

    // CONTROL ANIMATION AND DELAY SPEED FROM HERE
    // Higher value = slower animation/delay
    // Lower value = faster animation/delay
    var animationSpeed = 500; // Default speed in milliseconds (e.g., 500ms)
    // You can adjust this value to make the whole animation sequence faster or slower.

    // New variable for message display duration
    var messageDisplayDuration = 3000; // 3 seconds per message (adjust as needed)

    var vw;
    $(window).resize(function(){
        vw = $(window).width()/2;
        // Stop animations for all balloons before repositioning on resize
        // Ensure to include the new 'b8' here if you want it to behave similarly
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
        $('#b11').animate({top:240, left: vw-350}, animationSpeed / 3);
        $('#b22').animate({top:240, left: vw-250}, animationSpeed / 3);
        $('#b33').animate({top:240, left: vw-150}, animationSpeed / 3);
        $('#b44').animate({top:240, left: vw-50}, animationSpeed / 3);
        $('#b55').animate({top:240, left: vw+50}, animationSpeed / 3);
        $('#b66').animate({top:240, left: vw+150}, animationSpeed / 3);
        $('#b77').animate({top:240, left: vw+250}, animationSpeed / 3);
        // Added for b88 if it's introduced in a similar manner
        $('#b88').animate({top:240, left: vw+350}, animationSpeed / 3);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(animationSpeed * 1.5).promise().done(function(){
            $('#play').fadeIn('fast');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(animationSpeed * 2).promise().done(function(){
            $('#bannar_coming').fadeIn('fast');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(animationSpeed * 2).promise().done(function(){
            $('#balloons_flying').fadeIn('fast');
        });
    });

    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopSeven();
        });
    }
    // Added for b8
    function loopEight() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b8').animate({left:randleft,bottom:randtop}, animationSpeed * 6,function(){
            loopEight();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500}, animationSpeed * 4);
        // Ensure all balloons are included in the rotation behavior
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two'); // Added b8 here
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight(); // Call the new loop for b8

        $(this).fadeOut('slow').delay(animationSpeed * 1.5).promise().done(function(){
            $('#cake_fadein').fadeIn('fast');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('fast');
        $(this).fadeOut('slow').delay(animationSpeed / 5).promise().done(function(){
            $('#light_candle').fadeIn('fast');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('fast');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('fast');
        });
    });

    $('#wish_message').click(function(){
            vw = $(window).width()/2;

        // Stop animations for all balloons, including the new one
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');
        $('#b8').attr('id','b88'); // New balloon

        $('#b11').animate({top:240, left: vw-350}, animationSpeed / 3);
        $('#b22').animate({top:240, left: vw-250}, animationSpeed / 3);
        $('#b33').animate({top:240, left: vw-150}, animationSpeed / 3);
        $('#b44').animate({top:240, left: vw-50}, animationSpeed / 3);
        $('#b55').animate({top:240, left: vw+50}, animationSpeed / 3);
        $('#b66').animate({top:240, left: vw+150}, animationSpeed / 3);
        $('#b77').animate({top:240, left: vw+250}, animationSpeed / 3);
        $('#b88').animate({top:240, left: vw+350}, animationSpeed / 3); // Position for the new balloon

        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(animationSpeed / 2);
        $(this).fadeOut('slow').delay(animationSpeed * 1.5).promise().done(function(){
            $('#story').fadeIn('fast');
        });
    });

    $('#story').click(function(){
        $('.message').show();
        $('.message').addClass('animated zoomIn');
        $(this).fadeOut('slow').delay(animationSpeed * 2).promise().done(function(){
            $('#actual_surprise_link').fadeIn('fast');
        });
    });
});