function submit_by_id() {
  
    document.getElementById("homepageForm").submit(); 
  
  alert("Email sent to " + document.getElementById("inputEmail").value + " " + "Please Check your inbox for further details."
  );
  
  //now that we have loaded the data, we can post the data to the api
  //get all elements
  //post all elements
  
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
  }