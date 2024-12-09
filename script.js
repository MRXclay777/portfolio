const animatedText = document.querySelector('.animated-text');
const words = ["Frontend Designer", "Web Designer", "UI / UX Designer", "Web Developer", "Software Tester"];
let index = 0;

function type() {
    let word = words[index];
    let letterIndex = 0;

    function typeLetter() {
        if (letterIndex < word.length) {
            animatedText.textContent += word.charAt(letterIndex);
            letterIndex++;
            setTimeout(typeLetter, 150); // Задержка между буквами
        } else {
            setTimeout(deleteWord, 2000); // Задержка перед удалением слова
        }
    }

    typeLetter();
}

function deleteWord() {
    let word = words[index];
    let letterIndex = word.length;

    function deleteLetter() {
        if (letterIndex > 0) {
            animatedText.textContent = word.substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(deleteLetter, 100); // Задержка между удалениями
        } else {
            index = (index + 1) % words.length; // Переход к следующему слову
            setTimeout(type, 1000); // Задержка перед началом печати следующего слова
        }
    }

    deleteLetter();
}

type(); // Запуск анимации


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');






menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}