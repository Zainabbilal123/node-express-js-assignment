

const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


const users = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Doe', email: 'jane@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
];


app.get('/users', (req, res) => {
  res.render('index', { users });
});


app.get('/contact', (req, res) => {
  res.render('contact');
});


app.post('/contact', (req, res) => {
 
  const formData = `${req.body.name} - ${req.body.email} - ${req.body.message}\n`;
  fs.appendFile('contact.txt', formData, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.render('success');
    }
  });
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});