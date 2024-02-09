  let homepageForm = document.getElementById("homepageForm");

  homepageForm.addEventListener("submitForm", (e) => {
  e.preventDefault();

    let builderType = document.getElementById("builderType");
    let countryType = document.getElementById("countryType");
    let inputEmail = document.getElementById("inputEmail");
    let inputWebsite = document.getElementById("inputWebsite");
    let inputFulllName = document.getElementById("inputFulllName");
    let inputisBorC = document.getElementById("inputisBorC");
    let inputZip = document.getElementById("inputZip");
    let inputRefer = document.getElementById("inputRefer");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a builderType of ${builderType.value} and inputRefer of ${inputRefer.value}`
    );

    builderType.value = "";
    inputRefer.value = "";
  }
});

