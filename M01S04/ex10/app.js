const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  // larry - 0, steven - 1, carol - 2
  // length 3
  // steven -> 3 - 2
  // carol -> 3 - 1
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  ' Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."',
);
let sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, i, friends) {
  let punctuation = ', ';
  const { name, surname } = friend;
  const friendsLength = friends.length;
  // const name = friend.name

  if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  sentence += `${name} ${surname}${punctuation}`;
});
console.log(sentence);
