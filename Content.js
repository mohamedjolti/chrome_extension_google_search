function generateAds() {
  //get the div containing the Ads from the google result page
  var googleAdsDiv = document.getElementById("taw");
  var personalizedAds;
  if (googleAdsDiv !== null) {
    //fetch html content from template file
    fetch(chrome.runtime.getURL("/template.html")).
      then((r) => r.text()).then((html) => {
        personalizedAds= document.createElement("div");
        personalizedAds.innerHTML = html;
        //add the ads to the page
        googleAdsDiv.prepend(personalizedAds);
      });
  }
}
generateAds();
