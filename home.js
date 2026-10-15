// Store the information for each career area.
const strengths = {
    education: {
        title: "Education & Student Support",
        description:
            "My substitute-teaching experience includes delivering lessons, " +
            "managing classrooms, and recording student progress. " +
            "I listen, follow directions, and support teachers and students."
    },
    accounting: {
        title: "Accounting & Financial Support",
        description:
            "I processed more than 400 invoices weekly with 99% accuracy. " +
            "My experience includes account reconciliations, resolving billing " +
            "issues, and using JD Edwards, Mission, PestPac, and Excel."
    },
    administration: {
        title: "Administration & Leadership",
        description:
            "My background includes managing confidential records, coordinating " +
            "office tasks, training employees, and leading a team of eight or " +
            "more staff members."
    }
};

// Select the buttons and the area where information appears.
const strengthButtons = document.querySelectorAll("[data-area]");
const strengthDetails = document.querySelector("#strength-details");

// Update the information when a button is clicked.
strengthButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedArea = button.dataset.area;
        const selectedStrength = strengths[selectedArea];

        strengthDetails.querySelector("h3").textContent =
            selectedStrength.title;

        strengthDetails.querySelector("p").textContent =
            selectedStrength.description;
    });
});