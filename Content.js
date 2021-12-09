
function generateAds() {
  //fetch html content from template file
  fetch(chrome.runtime.getURL('/template.html')).then(r => r.text()).then(html => {
    var personalizedAds = document.createElement("div");
    personalizedAds.innerHTML = html;
    //get the div containing the Ads from the google result page
    var googleAdsDiv = document.getElementById("taw");
    //add the ads to the page
    if(googleAdsDiv != null)
      googleAdsDiv.prepend(personalizedAds);
    
  });
}

generateAds();
