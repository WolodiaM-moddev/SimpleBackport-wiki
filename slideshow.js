let idx = 0;
// Next/previous controls
function plusSlides(n) {
  idx += n;
  showSlides();
}
// Thumbnail image controls
function currentSlide(n) {
  idx = n;
  showSlides();
}
// Autoupdate controller
function slideController()
{
  idx++;
  showSlides();
  setTimeout(slideController, 4000);
}
// Slideshow draw
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow_slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (idx > slides.length) {idx = 1}
  slides[idx-1].style.display = "block";
} 