let homepageForm = document.getElementById("homepageForm");

homepageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("builderType");

  if (username.value == "" ) {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${builderType.value}`
    );

    builderType.value = "";
  }
});
