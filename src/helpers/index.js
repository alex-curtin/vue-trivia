const correctMessages = [
  'Very nice!',
  'Correct!',
  'Lucky Guess!',
  'You know your stuff!',
  'You got it!',
  'All signs point to "Yes"!',
  'Right you are!',
];

const incorrectMessages = [
  'Totally Wrong!',
  'Incorrect!',
  'Sorry!',
  'Ouch!',
  'Whoops!',
  "I don't think so!",
  'Nice try!',
  'Way off!',
];

const loadingMessages = [
  "I'm thinking...",
  'Next question coming up...',
  "You'll like this one...",
  "I've got a question for you...",
  'Get ready...',
  'Your next question is...',
  'Answer me this...',
];

export const getMessage = (type) => {
  let messages;
  switch (type) {
    case 'correct':
      messages = correctMessages;
      break;
    case 'wrong':
      messages = incorrectMessages;
      break;
    case 'loading':
      messages = loadingMessages;
      break;
  }
  return messages[Math.floor(Math.random() * messages.length)];
};
