'use strict'
var gProjs = [
    {
        'id': 'balloons',
        'name': 'Balloons',
        'title': 'Balloons CSS Game',
        'desc': 'Created with mostly css',
        'url': 'https://zoharharuv.github.io/balloons/',
        'img': 'img/portfolio/balloons',
        'publishedAt': '15/07/2021',
        'labels': ['Styling', 'Mouse events'],
    },
    {
        'id': 'touchnums',
        'name': 'Touch Nums',
        'title': 'Memory game',
        'desc': 'Click the numbers by order',
        'url': 'https://zoharharuv.github.io/touchnums/',
        'img': 'img/portfolio/touchnums',
        'publishedAt': '17/07/2021',
        'labels': ['Responsive', 'Mouse events'],
    },
    {
        'id': 'ballboard',
        'name': 'Ballboard',
        'title': 'Pickup the balls',
        'desc': 'Use the arrow keys to collect the balls or Mouse',
        'url': 'https://zoharharuv.github.io/ballboard/',
        'img': 'img/portfolio/ballboard',
        'publishedAt': '18/07/2021',
        'labels': ['Matrixes', 'Responsive', 'Keyboard events', 'Mouse events'],
    },
    {
        'id': 'pacman',
        'name': 'Pacman',
        'title': 'The classic pacman',
        'desc': 'Use the arrow keys to navigate',
        'url': 'https://zoharharuv.github.io/pacman/',
        'img': 'img/portfolio/pacman',
        'publishedAt': '20/07/2021',
        'labels': ['Matrixes', 'Responsive', 'Keyboard events'],
    },
    {
        'id': 'minesweeper',
        'name': 'Minesweeper',
        'title': 'The classic Minesweeper',
        'desc': 'Was my first big project',
        'url': 'https://zoharharuv.github.io/minesweeper/',
        'img': 'img/portfolio/minesweeper',
        'publishedAt': '25/07/2021',
        'labels': ['Matrixes', 'Responsive', 'Mouse events', 'Database'],
    },
    {
        'id': 'todos',
        'name': 'To-dos',
        'title': 'The oldschool version of Keep',
        'desc': 'Responsive tasks',
        'url': 'https://zoharharuv.github.io/todos/',
        'img': 'img/portfolio/todos',
        'publishedAt': '28/07/2021',
        'labels': ['Responsive', 'Database'],
    },
    {
        'id': 'bookstore',
        'name': 'Bookstore',
        'title': 'Come and buy a book',
        'desc': 'responsive with local storage use',
        'url': 'https://zoharharuv.github.io/bookstore/',
        'img': 'img/portfolio/bookstore',
        'publishedAt': '31/07/2021',
        'labels': ['Responsive', 'Database'],
    },
    {
        'id': 'guessgame',
        'name': 'Guess Game',
        'title': 'In insipration of akinator',
        'desc': 'Give it a try, make it smarter',
        'url': 'https://zoharharuv.github.io/guessgame/',
        'img': 'img/portfolio/guessgame',
        'publishedAt': '01/08/2021',
        'labels': ['Responsive', 'Database', 'Mouse events', 'Binary Tree'],
    },
];


function getProjects() {
    return gProjs;
}

function getProject(id) {
    return gProjs.find(function (proj) { return proj.id === id });
}