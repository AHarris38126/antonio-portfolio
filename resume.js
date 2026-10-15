// Select all of the experience buttons.
const experienceButtons = document.querySelectorAll(".experience-toggle");

// Listen for a click on each button.
experienceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Find the list connected to this button.
        const detailsId = button.getAttribute("aria-controls");
        const details = document.getElementById(detailsId);

        // Show hidden details or hide visible details.
        details.hidden = !details.hidden;

        // Update the button text and accessibility information.
        button.textContent = details.hidden
            ? "Show Details"
            : "Hide Details";

        button.setAttribute("aria-expanded", String(!details.hidden));
    });
});