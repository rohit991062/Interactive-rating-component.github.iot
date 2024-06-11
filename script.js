document.addEventListener('DOMContentLoaded', () => {
  const ratingOptions = document.querySelectorAll('.rating-option');
  const submitButton = document.getElementById('submit-rating');
  const ratingState = document.querySelector('.rating');
  const thankYouState = document.querySelector('.thankYou');
  const selectedRatingSpan = document.getElementById('selected-rating');
  let selectedRating = null;

  ratingOptions.forEach(option => {
    option.addEventListener('click', () => {
      ratingOptions.forEach(option => option.classList.remove('selected'));
      option.classList.add('selected');
      selectedRating = option.textContent;
    });
  });

  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      selectedRatingSpan.textContent = selectedRating;
      ratingState.classList.add('hidden');
      thankYouState.classList.remove('hidden');
    } else {
      alert('Please select a rating before submitting.');
    }
  });
});
