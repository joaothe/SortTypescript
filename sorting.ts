const test = [10, 5, 23];

test.sort((a,b) => a - b);

console.log(test);


const movies = [
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

movies.sort((a,b) => a.year - b.year);
console.log(movies.map(movie => movie.name));
