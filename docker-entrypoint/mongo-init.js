// Switch to the data Database
db = db.getSiblingDB('data');

// Create a user collection
db.users.drop();
db.users.createIndex({ name: 1 }, { unique: true });
db.users.insertMany([
  {
    _id: 1,
    name: "Superman",
    creationTime: "0",
    auth_hash: ""
  },
  {
    _id: 2,
    name: "Batman",
    creationTime: "0",
    auth_hash: ""
  }
]);

// Create a question collection
db.questions.drop();
db.questions.insertMany([
  {
    _id: 1, 
    title: "Can't find my socks!",
    text: "I can't seem to find my socks anywhere. Can somebody help me?",
    userId: 1,
    postTime: 0
  },
  {
    _id: 2, 
    title: "How to acces an array in javascript?",
    text: "I'm new to JS and would like to acces an element in an array I created.",
    userId: 2,
    postTime: 0
  }
]);

// Create answer collection
db.answer.drop();
db.answer.insertMany([
  {
    _id: 1,
    questionId: 1,
    userId: 2,
    text: "You can have some of my socks, I keep getting them for Christmas for dome reason.",
    postTime: 0
  }
]);

// Create vote collection
db.votes.drop();
db.votes.insertMany([
  {
    _id: 1,
    questionId: 1,
    userId: 2,
    value: 1,
    voteTime: 0
  },
  {
    _id: 2,
    answerId: 1,
    userId: 1,
    value: -1,
    voteTime: 0
  }
]);
