const correctMessages = ['Nice!', 'Correct!', 'Lucky Guess!'];
const incorrectMessages = ['Totally Wrong!', 'Incorrect!', 'Sorry!'];

export const getMessage = (result) => {
  if (result === 'correct') {
    return correctMessages[Math.floor(Math.random() * correctMessages.length)];
  }
  if (result === 'wrong') {
    return incorrectMessages[
      Math.floor(Math.random() * incorrectMessages.length)
    ];
  }
};
