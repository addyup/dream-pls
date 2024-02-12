function sumbitFormDetailsToPostAPI_HOMEPAGEDetails() {

  document.getElementById("homepageForm").submit(); 

     $.post("http://localhost:8080/homepageFormSubmission",
    {
      builderType: document.getElementById("builderType").value, 
      countryType: document.getElementById("countryType").value,
      inputEmail: document.getElementById("inputEmail").value,
      inputWebsite: document.getElementById("inputWebsite").value,
      inputFulllName: document.getElementById("inputFullName").value,
      inputisBorC: document.getElementById("inputisBorC").value,
      inputZip: document.getElementById("inputZip").value,
      inputRefer: document.getElementById("inputRefer").value,
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
}

