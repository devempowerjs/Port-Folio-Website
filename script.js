const { analyticshub } = require("googleapis/build/src/apis/analyticshub");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let responseMessage = document.getElementById("response-message");

        if (name && email && message) {
            try {
                let response = await fetch("http://localhost:3000/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message })
                });

                let result = await response.json();

                if (response.ok) {
                    responseMessage.style.color = "green";
                    responseMessage.textContent = "✅ Message sent successfully! Powered by Mayank - Freelance Developer";
                    this.reset();
                } else {
                    responseMessage.style.color = "red";
                    responseMessage.textContent = "❌ Failed to send message. Powered by Mayank - Freelance Developer";
                }
            } catch (error) {
                responseMessage.style.color = "red";
                responseMessage.textContent = "❌ Server error. Powered by Mayank - Freelance Developer";
            }
        } else {
            alert("⚠️ Please fill in all fields.");
        }
    });

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById(this.getAttribute("href").substring(1)).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
// mayank run.async server.rs karna h taki connect user ho YAAD RAKH ("UPR")