// Initialize EmailJS with your public key
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function(response) {
      alert("Email sent successfully!");
    }, function(error) {
      alert("Failed to send email: " + JSON.stringify(error));
    });
});
