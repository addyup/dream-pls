function postHomepageDetailsToServerFor_InitialHomepage() {

    document.getElementById("homepageForm").submit(); 

    //add working fetch call here
  $.post("http://localhost:8080/homepageFormSubmission",
      {
          builderType: document.getElementById("builderType").value,
          countryType: document.getElementById("countryType").value,
          inputEmail: document.getElementById("inputEmail").value,
          inputWebsite: document.getElementById("inputWebsite").value,
          inputFullName: document.getElementById("inputFullName").value,
          inputisBorC: document.getElementById("inputisBorC").value,
          inputZip: document.getElementById("inputZip").value,
          inputRefer: document.getElementById("inputRefer").value
      },
      function(data,status){
        alert("Data: " + data + "\nStatus: " + status);
      });

      alert("Email sent to " + document.getElementById("inputEmail").value + " " + "Please Check your inbox for further details."
  );

    }