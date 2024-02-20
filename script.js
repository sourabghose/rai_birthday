document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to (replace with your desired date)
  const countDownDate = new Date("Feb 20, 2024 13:59:45").getTime();

  // Update the countdown every 1 second
  const x = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown with emojis
    document.getElementById("countdown").innerHTML = `<span>${days}d</span> <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span> 🎉`;

    // Check if the countdown has ended
    if (distance < -19000) {
      clearInterval(x); // Stop the countdown
      // Redirect to another page (replace "destination.html" with your desired destination)
      // window.location.href = "destination.html";
      const container = document.querySelector('.container');
      const container1 = document.querySelector('.container1');
    
      // Hide the first container and show the second container
      container.style.display = 'none';
      container1.style.display = 'block';
    } else if (distance < 11000) { // If the countdown is less than 10 seconds
      // Show the video container
      document.getElementById("videoContainer").style.visibility = "visible";
      // Play the video
      document.getElementById("birthdayVideo").play();
    }
  }, 1000);

  // Confetti effect
  confetti();
});
