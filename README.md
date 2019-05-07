# stackoverflow-light-database

## Usage
Clone the repo and run: 
```
docker-compose up
```

This will setup a database for the Stackoverflow light application with some mock data in place.

It will initiate:
* 2 Users
* 2 Questions
* 1 answers
* 2 votes

## Design decisions
The database is implemented in MongoDB because it was easy to setup and scale for larger applications.

There is a table for Users, Questions, Answers and Votes. I decided to use only one Vote table for both the Question and Answer votes because this way it was easier to abstract the voting logic for both. Two separate tables would also have worked and would not have taken more space.
