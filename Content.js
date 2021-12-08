
// create  Ads with the title ,the url and the description 
function generateAds(url, title, description) {
  let div = document.createElement("div");
  div.innerHTML = `<div class='uEierd'>
                       <strong>Annonce </strong><a href='${url}'>${url}</a>
                       <a href='${url}'>
                         <h3 style='color:#2c2c8d;cursor: pointer'>${title}</h3>
                       </a>
                       <p class='VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf'>      
                          ${description}   
                       </p>
                       
                      </div>
                     <br>`;
  return div;
}

//getting the id of the div containing all the search content
var googleSearchDiv = document.getElementById("taw");

//prpend the ads to google search 
if(googleSearchDiv != null){
    googleSearchDiv.prepend(
      generateAds("https://www.booking.com/", "Hotel Paris - France -Booking.com",
          "Réservé votre last minute online..."));

    googleSearchDiv.prepend(
      generateAds("https://www.media.com/", "Hotel Paris Opera Affiliated By Melia",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."));
}

