const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadInput = document.createElement("input");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";

function showLoader() {
  loaderContainer.style.opacity = "1";
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const uploadedLogo = document.getElementById("uploaded-logo");
    uploadedLogo.src = reader.result;
    uploadedLogo.style.display = "block";
    umbrellaImage.style.zIndex = "-1";
  };
}
logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

blueThemeButton.addEventListener("click", () => {
  blueThemeButton.style.background = "#34b0f7";
  blueThemeButton.style.boxShadow = "0 0 0 10px #34b0f744, 0 0 50px #34b0f7, 0 0 100px #34b0f7";
  yellowThemeButton.style.background = "none";
  yellowThemeButton.style.boxShadow = "none";
  pinkThemeButton.style.background = "none";
  pinkThemeButton.style.boxShadow = "none";
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#C5E0DC";
    logoUploadButton.style.backgroundColor = "#34b0f7";
    setTimeout(() => {
      umbrellaImage.src = "./images/Blue umbrella.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  });
});

yellowThemeButton.addEventListener("click", () => {
  yellowThemeButton.style.background = "#FFA500";
  yellowThemeButton.style.boxShadow = "0 0 0 10px #FFA50044, 0 0 50px #FFA500, 0 0 100px #FFA500";
  blueThemeButton.style.background = "none";
  blueThemeButton.style.boxShadow = "none";
  pinkThemeButton.style.background = "none";
  pinkThemeButton.style.boxShadow = "none";
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F7E09E";
    logoUploadButton.style.backgroundColor = "#FFA500";
    setTimeout(() => {
      umbrellaImage.src = "./images/Yellow umbrella.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});

pinkThemeButton.addEventListener("click", () => {
  pinkThemeButton.style.background = "#FF00FF";
  pinkThemeButton.style.boxShadow = "0 0 0 10px #FF00FF44, 0 0 50px #FF00FF, 0 0 100px #FF00FF";
  yellowThemeButton.style.background = "none";
  yellowThemeButton.style.boxShadow = "none";
  blueThemeButton.style.background = "none";
  blueThemeButton.style.boxShadow = "none";
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F4C4C4";
    logoUploadButton.style.backgroundColor = "#FF00FF";
    setTimeout(() => {
      umbrellaImage.src = "./images/Pink umbrella.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});