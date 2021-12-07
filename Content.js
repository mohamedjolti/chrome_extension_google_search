
//create a div with some content
function generateDiv() {
    let div = document.createElement("div");
    div.innerHTML="<h3>Hello world</h3>";
    return div;
}
//getting the id of the div containing all the search content
var googleSearchDiv = document.getElementById("search");
googleSearchDiv.prepend(generateDiv());

