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
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.',
);
for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

const skillsLength = person.skills.length;
console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');
for (let i = 0; i < skillsLength; i++) {
  const skillName = person.skills[i];

  if (skillName[0] !== 'j') {
    console.log(skillName);
  }
}
