const btn = document.getElementById('click');
const hide = document.getElementById('hide');
const quiz = document.getElementById('quiz-container');


btn.addEventListener('click', (e) => {
    hide.classList.add('hidden');

    setTimeout (() => {
    hide.style.display = 'none'; 
    quiz.style.display = 'block';
}, 1000);
})

