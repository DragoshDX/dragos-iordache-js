const dateBuilder = [
  function () {
    return '2021';
  },
  function () {
    return 'Iulie';
  },
  function () {
    return '8';
  },
];

dateBuilder[3] = function () {
  return 'Joi';
};
