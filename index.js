const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from my smarty smarty server');
})

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888'},
    {id: 2, name: 'Sabnur', email: 'Sabnur@gmail.com', phone: '01788888888'},
    {id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888'},
    {id: 4, name: 'Suchomba', email: 'Suchomba@gmail.com', phone: '01788888888'},
    {id: 5, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888'},
    {id: 6, name: 'Sabila', email: 'Sabila@gmail.com', phone: '01788888888'},
    {id: 7, name: 'Sohana', email: 'Sohana@gmail.com', phone: '01788888888'},
]

app.get('/users', (req, res) => {
    if(req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        res.send(matched);
    }
    else {
        res.send(users)
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseFloat(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Sour sour fazle flavour');
})
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.listen(port, () => {
    console.log('Server is running at port', port);
})