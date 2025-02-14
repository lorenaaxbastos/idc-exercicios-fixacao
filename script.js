const accordions = document.querySelectorAll(".accordion-custom-4");

const styleAnswers = function (answer, feedback) {
    const answerContent = feedback.firstElementChild;
    if (answerContent && answerContent.textContent.trim().startsWith("✅")) {
        answer.classList.add("correct");
        feedback.classList.add("correct");
    } else {
        answer.classList.add("incorrect");
        feedback.classList.add("incorrect");
    }
};

const clearStylesAnswers = function (answer, feedback) {
    answer.classList.remove("correct", "incorrect");
    feedback.classList.remove("correct", "incorrect");
};

const showFeedback = function (answer) {
    const feedback = answer.nextElementSibling;
    answer.classList.add("active");
    feedback.classList.toggle("visible");
    styleAnswers(answer, feedback);
};

const hideAllFeedback = function () {
    accordions.forEach((acc) => {
        acc.classList.remove("active");
        const panel = acc.nextElementSibling;
        panel.classList.remove("visible");
        clearStylesAnswers(acc, panel);
    });
};

accordions.forEach((acc) => {
    acc.addEventListener("click", () => {
        hideAllFeedback();
        showFeedback(acc);
    });
});
