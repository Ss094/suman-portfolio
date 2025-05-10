document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Use EmailJS to send the email
    emailjs.init("mantu.06saurav@gmail.com");
    emailjs
        .send("service_rqj3wvp", "template_ikcirxm", {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(
            () => {
                alert("Message sent successfully!");
                this.reset();
            },
            (error) => {
                alert("Failed to send the message. Please try again.");
                console.error("Error:", error);
            }
        );
});
