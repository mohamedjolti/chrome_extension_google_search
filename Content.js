
//create a div with some content
function generateDiv() {
    let div = document.createElement("div");
    div.innerHTML = " <div>"
        + "<strong>Annonce </strong><a href=''>https://www.media.com/</a>"
        + "<h3 style='color:#2c2c8d'>Hotel Paris Opera Affiliated By Melia</h3>"
        + "<p>"
        + "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        + "Lorem Ipsum has been the industry's"
        + "</p>"

    "</div>";
    return div;
}
//getting the id of the div containing all the search content
var googleSearchDiv = document.getElementById("search");
googleSearchDiv.prepend(generateDiv());

