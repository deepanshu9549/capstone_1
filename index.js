$("#contact").click(function () {
  // Scroll to the profile section with smooth animation
  $("html").animate(
    {
      scrollTop: $("#contact-container").offset().top,
    },
    100
  ); // 1000 milliseconds = 1 second for smooth scroll
});

$("#home").click(function () {
  // Scroll to the profile section with smooth animation
  $("html").animate(
    {
      scrollTop: $("#hero-container").offset().top,
    },
    100
  ); // 1000 milliseconds = 1 second for smooth scroll
});

$("#do-abouts").click(function () {
  // Scroll to the profile section with smooth animation
  $("html").animate(
    {
      scrollTop: $("#do-abouts-container").offset().top,
    },
    100
  ); // 1000 milliseconds = 1 second for smooth scroll
});

$("#portfolio").click(function () {
  // Scroll to the profile section with smooth animation
  $("html").animate(
    {
      scrollTop: $("#portfolio-container").offset().top,
    },
    100
  ); // 1000 milliseconds = 1 second for smooth scroll
});
