// Function to open an email form
function openEmail() {
    window.location.href = "mailto:mdppxl@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.";
}

// Event listener to call openEmail when button is clicked
document.getElementById('emailButton').addEventListener('click', openEmail);

  // Toggle button graphic on click
  const button = document.getElementByClass(".button-with-image");

  button.addEventListener("click", () => {
    button.classList.toggle("clicked");
    button.classList.remove("hover-enabled");
  });