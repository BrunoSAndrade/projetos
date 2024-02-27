document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    let currentIndex = 0;

    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            currentIndex = index;
            toggleQuestion(question);
        });
    });

    function toggleQuestion(question) {
        question.classList.toggle('active');
        const answer = question.querySelector('.answer');

        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    }
});