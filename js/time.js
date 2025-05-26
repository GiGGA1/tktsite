<script>
  function updateClock() {
    const now = new Date();

    // საათი, წუთი, წამი
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // თვე, დღე, რიცხვი, წელი
    let monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let weekdayNames = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    document.getElementById("month").textContent = monthNames[now.getMonth()];
    document.getElementById("weekdays").textContent = weekdayNames[now.getDay()];
    document.getElementById("data").textContent = now.getDate();
    document.getElementById("year").textContent = now.getFullYear();
      }

  // პირველადი გაშვება
  updateClock();

  // განახლება ყოველ წამში
  setInterval(updateClock, 1000);
</script>