emailjs.init({
    publicKey: "djcGCzw9aonkhxSZP"
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const params = {
        name: contactForm.elements["name"].value.trim(),
        email: contactForm.elements["email"].value.trim(),
        message: contactForm.elements["message"].value.trim()
    };

    emailjs.send(
        "Portfolio235",
        "template_osgydd4",
        params
    )
    .then(function() {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch(function(error) {
        alert("Message failed to send!");
        console.log(error);
    });

});
