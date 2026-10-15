// Select the form and feedback paragraph.
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

contactForm.addEventListener("submit", (event) => {
    // Prevent the form from reloading the page or sending information.
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const messageInput = document.querySelector("#message");

    // Reject names or messages containing only spaces.
    if (
        nameInput.value.trim() === "" ||
        messageInput.value.trim() === ""
    ) {
        formFeedback.textContent =
            "Please enter a name and message containing more than spaces.";
        return;
    }

    formFeedback.textContent =
        `Thank you, ${nameInput.value.trim()}! Your sample form passed ` +
        "validation. This is a demo; no message was sent or saved.";

    contactForm.reset();
});