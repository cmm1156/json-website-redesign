
let mainContainer = document.getElementById("mainContainer");

let albumDatabase = [

  {
    "title" : "Meet the Beatles!",
    "image_url" : "meet.jpg",
    "bg_color" : "gold",
    "info" : ["1964", " Capitol"],
    "songs" : ["I Want to Hold Your Hand", "It Won't Be Long", "All I've Got to Do", "Hold Me Tight", "Not a Second Time", "I Saw Her Standing There"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLhh2Mh7vZHr0raXogBeSIoGU0APggMGsr",
    "class_name" : "album1"

  },

  {
    "title" : "A Hard Day's Night",
    "image_url" : "hard.jpg",
    "bg_color" : "#80b9ff",
    "info" : ["1964", " United Artists"],
    "songs" : ["If I Fell", "Any Time at All", "You Can't Do That", "A Hard Day's Night", "I Should Have Known Better", "I'll Be Back"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLycVTiaj8OI-HjTjakWPpJO9Y6kh1icp2",
    "class_name" : "album2"

  },

  {
    "title" : "Beatles VI",
    "image_url" : "vi.jpg",
    "bg_color" : "#fffee8",
    "info" : ["1965", " Capitol Records"],
    "songs" : ["Yes It Is", "Tell Me What You See", "Every Little Thing", "Kansas City", "Eight Days a Week", "What You're Doing"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLcHZqts5PdNPTQ5DBxPHE-kzuPkGDQS3w",
    "class_name" : "album3"

  },

  {
    "title" : "Help!",
    "image_url" : "help.jpg",
    "bg_color" : "#2e2e2e",
    "info" : ["1965", " Capitol Records"],
    "songs" : ["The Night Before", "I Need You", "You Like Me Too Much", "Ticket to Ride", "Yesterday", "Help!"],
    "font_color" : "white",
    "music_link" : "https://www.youtube.com/playlist?list=PLycVTiaj8OI9JtydS7uKMO1FGl8UDBmcZ",
    "class_name" : "album4"

  },

  {
    "title" : "Beatles For Sale",
    "image_url" : "forsale.jpg",
    "bg_color" : "#d4b361",
    "info" : ["1966", " Capitol Records"],
    "songs" : ["Mr. Moonlight", "Honey Don't", "Words of Love", "I'm a Loser", "Rock and Roll Music", "Every Little Thing"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLycVTiaj8OI-DkxXKgnI5w2PKgUKoPLQ8",
    "class_name" : "album5"

  },

  {
    "title" : "Revolver",
    "image_url" : "revolver.jpg",
    "bg_color" : "#FFFFFF",
    "info" : ["1966", " Capitol Records"],
    "songs" : ["Taxman", "Eleanor Rigby", "Good Day Sunshine", "And Your Bird Can Sing", "For No One", "Doctor Robert"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLycVTiaj8OI9QBZWsldja1JJwsIO-2xtY",
    "class_name" : "album6"

  },

  {
    "title" : "Abbey Road",
    "image_url" : "abbey.jpg",
    "bg_color" : "#d0d3d6",
    "info" : ["1969", " Apple"],
    "songs" : ["Oh Darling", "Something", "Because", "Come Together", "Sun King", "The End"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLycVTiaj8OI-kwvNjgvvopMJt__x-y5mD",
    "class_name" : "album7"

  },

  {
    "title" : "Let It Be",
    "image_url" : "letitbe.jpg",
    "bg_color" : "#db9ec6",
    "info" : ["1970", " Apple"],
    "songs" : ["Dig a Pony", "Get Back", "Let It Be", "I've Got a Feeling", "For You Blue", "Two of Us"],
    "font_color" : "black",
    "music_link" : "https://www.youtube.com/playlist?list=PLycVTiaj8OI-aOPBmpwUlhQp83Puf0hLX",
    "class_name" : "album8"

  }

]


let headerDiv = document.createElement("DIV");
headerDiv.classList.add("headerDiv");
mainContainer.appendChild(headerDiv);

let headerImage = document.createElement("IMG");
headerImage.classList.add("headerImage");
headerImage.src = "logo.png";
headerDiv.appendChild(headerImage);

// let submarineImage = document.getElementById("submarine-png");

let submarineImage = document.createElement("IMG");
submarineImage.classList.add("submarineImage");
submarineImage.src = "sub-bg.png";
mainContainer.appendChild(submarineImage);

// let albumContainer = document.createElement("DIV");
// albumContainer.classList.add("albumContainer");




let albumRowContainer = document.getElementById("albumRowContainer");

for (var i = 0; i < albumDatabase.length; i++) {
    createAlbum(albumDatabase[i]);
}

function createAlbum(incomingJSON) {

  let newAlbumPanel = document.createElement("DIV");
  newAlbumPanel.style.backgroundColor = incomingJSON['bg_color'];
  newAlbumPanel.style.color = incomingJSON['font_color'];

  newAlbumPanel.classList.add('albumStrip');
  newAlbumPanel.classList.add(incomingJSON['class_name']);




  let musicLink = document.createElement("A");
  musicLink.classList.add("musicLink");
  musicLink.href = incomingJSON['music_link'];
  // musicLink.window.open("incomingJSON[\'musicLink\']", 'blank');

  let newImage = document.createElement("IMG");
  newImage.classList.add("albumImage");
  newImage.src = incomingJSON['image_url'];

  musicLink.appendChild(newImage);
  newAlbumPanel.appendChild(musicLink);




  let newPanelHeading = document.createElement("H2");
  newPanelHeading.classList.add('albumTitle');
  newPanelHeading.innerHTML = incomingJSON['title'];
  newAlbumPanel.appendChild(newPanelHeading);


  let infoElement = document.createElement("H3");
  infoElement.classList.add('albumInfo');
  infoElement.innerHTML = incomingJSON['info'];
  newAlbumPanel.appendChild(infoElement)


  let newPanelSubhead = document.createElement("H4");
  newPanelSubhead.classList.add('trackListHeader');
  // newPanelSubhead.classList.add('trackTitle');
  newPanelSubhead.innerHTML = "Tracks:";
  newAlbumPanel.appendChild(newPanelSubhead);


  let newSongList = document.createElement("OL");
  newSongList.classList.add('trackList');

  newAlbumPanel.appendChild(newSongList);

  for (var i = 0; i < incomingJSON['songs'].length; i++) {
    var currentSongString = incomingJSON['songs'][i];
    var newSongItem = document.createElement("LI");
    newSongItem.innerHTML = currentSongString;
    newSongList.appendChild(newSongItem);
  }

  albumRowContainer.appendChild(newAlbumPanel);

  // newAlbumPanel.style.gridRow = i;

}

mainContainer.appendChild(albumRowContainer);


// newImage.addEventListener("mouseover", newImage.style.border = "solid red 2px");




























// spacer
