var test = [10, 5, 23];
test.sort(function (a, b) { return a - b; });
console.log(test);
var movies = [
    {
        name: 'Shrek',
        year: '2001',
    },
    {
        name: 'Spirit - O Corcel Indomável',
        year: '2002',
    },
    {
        name: 'O rei Leão',
        year: '1994',
    }
];
movies.sort(function (a, b) { return a.year - b.year; });
console.log(movies.map(function (movie) { return movie.name; }));
