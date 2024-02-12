function sumbitFormDetailsToPostAPI_HOMEPAGEDetails() {

  document.getElementById("homepageForm").submit(); 

  
  fetch('http://localhost:8080/homepageFormSubmission', {
  method: 'POST',
  body: JSON.stringify({
    builderType: document.getElementById("builderType"), 
    countryType: document.getElementById("countryType"),
    inputEmail: document.getElementById("inputEmail"),
    inputWebsite: document.getElementById("inputWebsite"),
    inputFulllName: document.getElementById("inputFulllName"),
    inputisBorC: document.getElementById("inputisBorC"),
    inputZip: document.getElementById("inputZip"),
    inputRefer: document.getElementById("inputRefer"),
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});

 

}

function postHomepageDetailsToServerFor_InitialHomepage() {
  alert("Email sent to " + document.getElementById("inputEmail").value + " " + "Please Check your inbox for further details.");
}

    