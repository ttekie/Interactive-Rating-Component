// this function will run when the document is done loading
$(function() {
   // select elements from the DOM tree and store them in a variable 
   const form = document.querySelector('#rating-form');
   const submitBtn = document.querySelector('.submit-btn');
   // will return a node list(An array like object)
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
            // reset rating dynamically 
            rating = e.target.textContent;
            callback(rating);
            // the block of code within this condition only executes 
            // if the condition is truthy 
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

   // listener function that listens when submit event is fired
   function onSubmitForm(e) {
      e.preventDefault();
      span.textContent = rating;
      ratingState.style.display = 'none';
      thankYouState.style.display = 'flex';
   }
   form.addEventListener('submit', onSubmitForm);
});