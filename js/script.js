/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''), 
            b = prompt('На сколько оцените его?', '');
        if(a != null && a!= '' && a.length < 50 && b != null && b != '') {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count<10) {
        console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count<30) {
        console.log("Вы классический зритель");
        } else if (personalMovieDB.count>30) {
        console.log("Вы киноман");
        } else {
        console.log("Произошла ошибка");
        }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt("Ваш любимый жанр под номером " + i, ''));
    }
}

writeYourGenres();