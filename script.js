const ratingLabels = document.querySelectorAll(".rating-label");

ratingLabels.forEach((label) => {
  label.addEventListener("click", () => {
    const input = label.querySelector('input[type="radio"]');
    input.checked = true;
  });
});

const ratingCard = document.getElementById("rating-card");
const thankYou = document.getElementById("thank-you");
const ratingForm = document.getElementById("rating-form");
const selectedRating = document.getElementById("selected-rating");
const form = document.querySelector('form');
const ratingMessage = document.getElementById("rating-message"); // Add this line to get the rating message element

thankYou.classList.add("hidden");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const rating = formData.get("rating");

  if (!rating) { // Add this block to check if a rating is selected
    ratingMessage.classList.remove("hidden");
    return;
  }

  ratingMessage.classList.add("hidden"); // Add this line to hide the message if a rating is selected
  selectedRating.textContent = `${rating}`;
  showThankYou();
}

function showThankYou() {
  ratingCard.classList.add("hidden");
  thankYou.classList.remove("hidden");
}
