// Switch to the data Database
db = db.getSiblingDB('data');

// Create a user collection
db.users.drop();
db.users.createIndex({ name: 1 }, { unique: true });

id_superman = ObjectId();
id_batman = ObjectId();

// Add two users name/pwd: 
// Superman/Superman
// Batman/Batman
db.users.insertMany([
  {
    _id: id_superman,
    name: "Superman",
    creationTime: "0",
    authHash: "27d5233ddd8968526735078ca9efa95ec03a22ea942420df0841f78ca9d9c272"
  },
  {
    _id: id_batman,
    name: "Batman",
    creationTime: "0",
    authHash: "bd9b74a682cd757611805f86371a5a277b2941fa42345ce4c87a7c9e28244c2c"
  }
]);

// Create a question collection
db.questions.drop();

id_sock = ObjectId();
id_jsarray = ObjectId();

db.questions.insertMany([
  {
    _id: id_sock, 
    title: "Can't find my socks!",
    text: "I can't seem to find my socks anywhere. Can somebody help me?",
    userId: id_superman,
    postTime: 0
  },
  {
    _id: id_jsarray, 
    title: "How to acces an array in javascript?",
    text: "I'm new to JS and would like to acces an element in an array I created.",
    userId: id_batman,
    postTime: 0
  }
]);

// Create answer collection
db.answers.drop();

id_answer = ObjectId();

db.answers.insertMany([
  {
    _id: id_answer,
    questionId: id_sock,
    userId: id_batman,
    text: "You can have some of my socks, I keep getting them for Christmas for some reason.",
    postTime: 0
  }
]);

// Create vote collection
db.votes.drop();
db.votes.insertMany([
  {
    questionId: id_sock,
    userId: id_batman,
    value: 1,
    voteTime: 0
  },
  {
    answerId: id_answer,
    userId: id_superman,
    value: -1,
    voteTime: 0
  }
]);
