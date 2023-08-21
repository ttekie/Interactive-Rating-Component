$(function() {
   const form = document.querySelector('#rating-form');
   const submitBtn = document.querySelector('.submit-btn');
   const ratingBtn = document.querySelectorAll('.rating-label');
   const ratingState = document.querySelector('#rating-state-start');
   const span = document.querySelector('span');
   const thankYouState = document.querySelector('#thank-you-state-start');
   let rating = 0;
   let selectedBtn = null;

   // a function that take a callback as a parameter
   function ratingValue(callback) {
      ratingBtn.forEach(btn => {
         btn.addEventListener('click', (e) => {
            rating = e.target.textContent;
            callback(rating);
            if(selectedBtn) {
               selectedBtn.style.backgroundColor = '';
            }
            selectedBtn = e.target;
            selectedBtn.style.backgroundColor = 'hsl(217, 12%, 63%)';
            selectedBtn.style.color = 'hsl(0, 0%, 100%)';
         })
      })
   }

   ratingValue(updatedRating => {
      rating = updatedRating;
   });

   function onSubmitForm(e) {
      e.preventDefault();
      span.textContent = rating;
      ratingState.style.display = 'none';
      thankYouState.style.display = 'flex';
   }
   form.addEventListener('submit', onSubmitForm);
});