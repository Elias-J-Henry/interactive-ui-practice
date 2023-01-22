var quoteApiUrl = "https://api.api-ninjas.com/v1/quotes?limit=10&category=happiness";
var apiKey = "vrMpOo6Ordjc3AXBcrcnpg==9cb3QuB7Mmnc1kfG";

// var quoteArr = [
//   {
//     quote: '"A room without books is like a body without a soul."',
//     author: "Marcus Tullius Cicero",
//   },
//   {
//     quote:
//       '"Be who you are and say what you feel, because those who mind don`t matter, and those who matter don`t mind."',
//     author: "Bernard M. Baruch",
//   },
//   {
//     quote:
//       '"You know you`re in love when you can`t fall asleep because reality is finally better than your dreams."',
//     author: "Dr. Seuss",
//   },
//   {
//     quote: '"You only live once, but if you do it right, once is enough."',
//     author: "Mae West",
//   },
//   {
//     quote: '"If you tell the truth, you don`t have to remember anything."',
//     author: "Mark Twain",
//   },
// ];

var quoteArr;
var currentQuote;

var container = document.getElementById("container"); // <div>

// hw: look into promises.
// async/await ensures the process does not complete before finishing everything with await in front of it
const quoteFetch = async (url, key) => {
  // fetch api url, using key as a header per documentation
  const response = await fetch(url, { headers: { "X-Api-Key": key } });
  var data = await response.json(); // return the data as json so we can work with it
  quoteArr = data;
  currentQuote = quoteArr[0];
  insertQuote(currentQuote, quoteArr.indexOf(currentQuote));
}


function selectPrevious() {
  // we need to figure out what index of quoteArr currentQuote is.
  var index = quoteArr.indexOf(currentQuote);
  // and then we need to subtract 1 from it if the index is not 0.
  if (index != 0) {
    var newIndex = index - 1;
    currentQuote = quoteArr[newIndex];
    // call insert and delete quote functions
    // delete
    removeQuote(index);
    // insert
    insertQuote(currentQuote, newIndex);
  }
}

function selectNext() {
  // we need to figure out what index of quoteArr currentQuote is.
  var index = quoteArr.indexOf(currentQuote);
  // and then we need to add 1 to it if the index is not the last item of quoteArr.
  if (index < quoteArr.length - 1) {
    // length - 1 = last item of the array (last index)
    var newIndex = index + 1;
    currentQuote = quoteArr[newIndex];
    console.log(currentQuote);
    removeQuote(index);
    insertQuote(currentQuote, newIndex);
  }
}

// create a function where it adds our quote into the html
function insertQuote(quote, index) {
  // create p tag
  var p = document.createElement("p");
  // append quote to p tag
  p.appendChild(document.createTextNode(quote.quote));
  // give p tag id of the index
  p.setAttribute("id", index);
  // append p tag to div
  container.appendChild(p);
  //create p tag
  var author = document.createElement("p");
  // append author to p tag
  p.appendChild(document.createTextNode(" - " + quote.author));
  // give p tag id of index
  p.setAttribute("id", index);
  // append p tag to div
  container.appendChild(p);
}

// make a function that removes the current html element

function removeQuote(index) {
  var quoteElement = document.getElementById(index);
  quoteElement.remove();
}

quoteFetch(quoteApiUrl, apiKey);

document.getElementById("prev-btn").addEventListener("click", selectPrevious);
document.getElementById("nxt-btn").addEventListener("click", selectNext);

console.log(currentQuote);