var quoteArr = [{quote: "1"}, {quote: "2"}, {quote: "3"}, {quote: "4"}, {quote: "5"}];
var currentQuote = quoteArr[0];

function selectPrevious() {
    // we need to figure out what index of quoteArr currentQuote is.
    var index = quoteArr.indexOf(currentQuote);
    // and then we need to subtract 1 from it if the index is not 0.
    if(index != 0) {
        currentQuote = quoteArr[index - 1]
    }
}

function selectNext() {
    // we need to figure out what index of quoteArr currentQuote is.
    var index = quoteArr.indexOf(currentQuote);
    // and then we need to add 1 to it if the index is not the last item of quoteArr.
    if(index < quoteArr.length - 1) { // length - 1 = last item of the array (last index)
        currentQuote = quoteArr[index + 1]
    }
}

document.getElementById("prev-btn").addEventListener("click", selectPrevious);
document.getElementById("nxt-btn").addEventListener("click", selectNext);