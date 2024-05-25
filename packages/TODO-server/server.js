const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

let todos = [];
let id = 0;

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { title, dueDate } = req.body;
    const newTodo = { id: ++id, title, dueDate, completed: false };
    todos.push(newTodo);
    res.json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, dueDate, completed } = req.body;
    const todo = todos.find(todo => todo.id == id);
    if (todo) {
        todo.title = title;
        todo.dueDate = dueDate;
        todo.completed = completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id != id);
    res.json({ message: 'Todo deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
