// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const error = document.getElementById('modal') 
             error.setAttribute('class' , 'hidden')

document.addEventListener('DOMContentLoaded', () => {
  let hearts = document.querySelectorAll('.like-glyph')

   for(const heart of hearts) {
     heart.addEventListener('click', event => {
       mimicServerCall()
       .then(() => {
         if(heart.innerText === EMPTY_HEART){
           heart.innerText = FULL_HEART
           heart.className = 'activated-heart'
         }
         else {
           heart.innerText === FULL_HEART
             heart.classList.remove('activated-heart')


        
         
      
          .catch((hearts) => {
            error.setAttribute('class','show')
          setTimeout(() => {
            error.setAttribute('class', 'hidden')},3000
           
          )}
          )}
       }
      )}
     )}
      })
    
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
