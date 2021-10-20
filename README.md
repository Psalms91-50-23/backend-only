# FullStack Setup

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
routes can be tested in Postman or Insomnia


Initially in the database below
[
  {
    "id": 1,
    "from": "mom",
    "to": "andrew",
    "task": "clean your room",
    "hint": "",
    "completed": false
  },
  {
    "id": 2,
    "from": "anonymous",
    "to": "rachel",
    "task": "make sure your brother cleans his room",
    "hint": "tall and handsome, gives you pocket money",
    "completed": false
  },
  {
    "id": 3,
    "from": "anonymous",
    "to": "mom",
    "task": "remember to buy me boots for rugby",
    "hint": "complainer",
    "completed": false
  }
]

http://localhost:3000/api/v1/todos gets all todos


http://localhost:3000/api/v1/todos/anynumber  gets route for a specify todo

eg
http://localhost:3000/api/v1/todos/3  will get you the todo with id 3


http://localhost:3000/api/v1/todos/anynumber  delete route will delete a specific todo

eg
http://localhost:3000/api/v1/todos/3   will delete todo with id 3


http://localhost:3000/api/v1/todos  post route

eg
{
    "from": "",
    "to": "mommy",
    "task": "you have to buy me a comic so I can give as a present for my friends birthday",
    "hint": "complainer",
    "completed": true
}


http://localhost:3000/api/v1/todos/12  patch route 
eg
{

	"from": "baby boy",
	"to": "mommy",
	"task": "you have to buy me a comic so I can give as a present for my friends birthday",
	"hint": "not complaining anymore mom",
	"completed": true
}

```