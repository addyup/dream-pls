function sumbitFormDetailsToPostAPI_HOMEPAGEDetails() {

  document.getElementById("homepageForm").submit(); 

    let builderType = document.getElementById("builderType");
    let countryType = document.getElementById("countryType");
    let inputEmail = document.getElementById("inputEmail");
    let inputWebsite = document.getElementById("inputWebsite");
    let inputFulllName = document.getElementById("inputFulllName");
    let inputisBorC = document.getElementById("inputisBorC");
    let inputZip = document.getElementById("inputZip");
    let inputRefer = document.getElementById("inputRefer");
//add alert after http response is successful

  fetch('http://localhost:8080/homepageFormSubmission', {
  method: 'POST',
  body: 
  JSON.stringify(
    {
    builderType: builderType, 
    countryType: countryType,
    inputEmail: inputEmail,
    inputWebsite: inputWebsite,
    inputFulllName: inputFulllName,
    inputisBorC: inputisBorC,
    inputZip: inputZip,
    inputRefer: inputRefer,
  }
  ),
  headers: {
    'Content-Type': 'application/json',
  },
});

 

}

// function postHomepageDetailsToServerFor_InitialHomepage() {
//   alert("Email sent to " + document.getElementById("inputEmail").value + " " + "Please Check your inbox for further details.");
// }

    