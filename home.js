// Store the information for each career area.
const strengths = {
    education: {
        title: "Education & Student Support",
        description:
            "My substitute-teaching experience includes supporting K–12 " +
            "classrooms, delivering teacher-provided lesson plans, managing " +
            "classroom behavior, and documenting student progress. " +
            "I work to create a respectful environment where students feel " +
            "comfortable asking questions and participating. When students " +
            "struggle, I listen, identify the challenge, and explain the " +
            "material another way. I follow teacher directions, protect " +
            "student confidentiality, and approach difficult situations " +
            "calmly. I hold an MBA in Business Management and have passed " +
            "the Praxis Business Education: Content Knowledge exam. " +
            "My goal is to build a career in education while continuing " +
            "to learn from experienced teachers."
    },
    accounting: {
        title: "Accounting & Financial Support",
        description:
        "I processed more than 400 invoices weekly with 99% accuracy. " +
        "My experience includes reconciling accounts, reviewing payment " +
        "records, resolving billing issues, and supporting accounts " +
        "payable and accounts receivable operations. I collaborated with " +
        "vendors and coworkers to research discrepancies and helped reduce " +
        "discrepancies by approximately 20%. I also posted receipts, " +
        "processed payments, and maintained accurate, confidential " +
        "financial documentation. My software experience includes " +
        "JD Edwards, Mission, PestPac, and Microsoft Excel."
},
    administration: {
        title: "Administration & Leadership",
        description:
             "My experience includes managing confidential records, reviewing " +
        "legal documents, coordinating office tasks, and supporting daily " +
        "court operations. I led a team of eight or more staff members, " +
        "trained new employees, and served as a fill-in supervisor. " +
        "I maintained attendance and production records, prepared work " +
        "orders and purchase requisitions, and communicated with senior " +
        "management and other departments. I bring organization, accuracy, " +
        "problem-solving, and a calm approach to handling competing priorities."
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