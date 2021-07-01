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

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "',
);
sentence = '';
person.friends.forEach(function ({ name, age }, i, friends) {
  // v2 const name = friend.name
  const ageDiff = Math.abs(person.age - age);
  sentence += `Intre ${
    person.name
  } si ${name} este o diferenta de ${ageDiff} ani.${
    i === friends.length - 1 ? '' : ' '
  }`;
});
console.log(sentence.trim());

console.warn(
  'Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.',
);
// reverse mutates
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });
// person.skill.reverse()

console.warn('In mod similar, afiseaza skillurile care nu incep cu j.');
//v1
person.skills.forEach(function (skill) {
  if (!skill.startsWith('j')) {
    console.log(skill);
  }
});
//v2
person.skills.forEach((skill) => {
  if (skill[0] === 'j') {
    return;
  }

  console.log(skill);
});
