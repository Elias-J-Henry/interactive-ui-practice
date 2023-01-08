var quoteArr = [{quote: "1"}, {quote: "2"}, {quote: "3"}, {quote: "4"}, {quote: "5"}];
var currentQuote = quoteArr[0];
var container = document.getElementById("container"); // <div>

function selectPrevious() {
    // we need to figure out what index of quoteArr currentQuote is.
    var index = quoteArr.indexOf(currentQuote);
    // and then we need to subtract 1 from it if the index is not 0.
    if(index != 0) {
        var newIndex = index - 1;
        currentQuote = quoteArr[newIndex]
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
    if(index < quoteArr.length - 1) { // length - 1 = last item of the array (last index)
        var newIndex = index + 1;
        currentQuote = quoteArr[newIndex]
        console.log(currentQuote)
        removeQuote(index);
        insertQuote(currentQuote, newIndex)
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
}

// make a function that removes the current html element

function removeQuote(index) {
    var quoteElement = document.getElementById(index);
    quoteElement.remove();
}

insertQuote(currentQuote, quoteArr.indexOf(currentQuote));

document.getElementById("prev-btn").addEventListener("click", selectPrevious);
document.getElementById("nxt-btn").addEventListener("click", selectNext);