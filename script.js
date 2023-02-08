// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imageUrl = document.querySelector(".column display-image");
let songName = document.querySelector(".display-song");
let artist = document.querySelector(".display-artist");
let songLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let songNames = ["After Hours", "Dimple", "Arabella", "Reflections"]
console.log();

let imageUrls = ["https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png", "https://i.scdn.co/image/ab67616d0000b2733825e6d4d02e4b4c0cec7e1d", "https://upload.wikimedia.org/wikipedia/en/7/7e/Arctic_Monkeys_-_Arabella.jpg", "https://images.genius.com/00047d81dd8ef735f27af9b3d08fa0e3.1000x1000x1.jpg"]
console.log();

let artists = ["The Weeknd", "BTS", "Arctic Monkeys", "The Neighborhood"]
console.log();

let songLinks = ["https://www.youtube.com/results?search_query=after+hours+the+weeknd", "https://www.youtube.com/watch?v=n81ceM7rlaw", "https://www.youtube.com/watch?v=Jn6-TItCazo", "https://www.youtube.com/watch?v=x47TgeRJtH0"]
console.log();




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let nameInput = songName.value;
  let imgInput = image.value
  let linkInput = songLink.value;
  let artistInput = artist.value;

// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
for(let i = 0; i < imageArray.length;i++) {
 let newImage = document.createElement("img");
  newImage.src = image[i];
  displayimage.append(newImage);
}
for(let i = 0; i < SongLinkArray.length;i++){
  let newLink = document.createElement("")
}

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
