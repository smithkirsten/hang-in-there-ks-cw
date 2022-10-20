// query selector variables go here 👇
//initial load
var poster = document.querySelector('.poster');
var randomButton = document.querySelector('.show-random');

//pages
var mainPosterPage = document.querySelector('.main-poster')
var posterFormPage = document.querySelector('.poster-form')
var savedPosterPage = document.querySelector('.saved-posters')

//buttons
var makePosterButton = document.querySelector('.show-form')
var showSavedButton = document.querySelector('.show-saved')
var takeMeBackButton = document.querySelector('.show-main')
var backToMainButton = document.querySelector('.back-to-main')



// declare var poster = document.querySelector(".poster") 

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

//initial load
window.addEventListener('load', pageLoad);
randomButton.addEventListener('click', pageLoad);

//change page clicks
makePosterButton.addEventListener('click', goToFormPage);
showSavedButton.addEventListener('click', goToSavedPage);
takeMeBackButton.addEventListener('click', takeMeBack);
backToMainButton.addEventListener('click', XXXX);

//make your own poster button- add event listener 'click' connected to function that hides main poster and unhides form
//view saved posters button - add event listener 'click' connected to function that hides main poster and unhides saved posters
//never mind take me back button - add event listener 'click' connected to function that hides form and unhides main poster
//back to main button - add event listener 'click' connected to function that hides saved posters and unhides main

//addEventListener('click', hidePage)


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

//randomize index number
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//initial page load
function pageLoad() {
  // poster.innerHTML = null
  var imageIndex = getRandomIndex(images)
  var quoteIndex = getRandomIndex(quotes)
  var titleIndex = getRandomIndex(titles)
  var newPoster = {
    image: images[imageIndex],
    quote: quotes[quoteIndex],
    title: titles[titleIndex],
  }

  poster.innerHTML = `<img class="poster-img" src=${newPoster.image} alt="Poster image">
  <h1 class="poster-title">${newPoster.title}</h1>
  <h3 class="poster-quote">${newPoster.quote}</h3>`
}

//change page functions. REFACTOR: CAN THEY BE COMBINED?
function goToFormPage() {
  mainPosterPage.classList.add('hidden');
  posterFormPage.classList.remove('hidden');
}
function goToSavedPage() {
  mainPosterPage.classList.add('hidden');
  showSavedButton.classList.remove('hidden');
}
function takeMeBack() {
  mainPosterPage.classList.remove('hidden');
  posterFormPage.classList.add('hidden');
}
function backToMain() {
  mainPosterPage.classList.remove('hidden');
  savedPosterPage.classList.add('hidden');
}



//never mind take me back button - function that hides form and unhides main poster
//back to main button - function that hides saved posters and unhides main


//one function for each page. Hides unhidden page and unhides clicked page
//do we want to access innerHTML to remove the word hidden (similar to changing the string above?)
//https://attacomsian.com/blog/javascript-hide-show-elements-using-css-class




//function pageLoadFunction() {
  //instantiate poster
  //var indexForArray = getRandomIndex(pickAnArray);
  //pass value at each index 
//}



//-----------------//
//1st. bullet point of iteration 0
//when page loads we should see a poster with a randomly selected image title and quote
//listen for page load
//create a poster (instantiate a class or pull individual pieces from the datamodel and send them individually to the DOM(but better to use class))
  //poster needs random image, title, quote (random generator Math floor)
  //instantiated poster is created in the datamodel and needs to be sent to the DOM (link poster.js to main.js)


  //use innerHTML to send the poster to the DOM