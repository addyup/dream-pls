function sumbitFormDetailsToPostAPI_HOMEPAGEDetails() {

  document.getElementById("homepageForm").submit(); 

    
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

  alert("Email sent to " + document.getElementById("inputEmail").value + " " + "Please Check your inbox for further details.");
 if(response == '200') {
  alert("Email sent to " + document.getElementById("inputEmail").value + " " + "Please Check your inbox for further details.");
 }

}

