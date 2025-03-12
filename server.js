// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/write-file') {
//         fs.writeFile('data.txt', 'Hello, this is a sample text!', (err) => {
//             if (err) {
//                 res.end('Error writing file');
//             } else {
//                 res.end('File created and text written!');
//             }
//         });
//     } else if (req.url === '/read-file') {
//         fs.readFile('data.txt', 'utf8', (err, data) => {
//             if (err) {
//                 res.end('Error reading file or file does not exist');
//             } else {
//                 res.end(`File Content: ${data}`);
//             }
//         });
//     } else if (req.url === '/append-file') {
//         fs.appendFile('data.txt', '\nNew content added!', (err) => {
//             if (err) {
//                 res.end('Error appending to file');
//             } else {
//                 res.end('Content appended successfully!');
//             }
//         });
//     } else if (req.url === '/delete-file') {
//         fs.unlink('data.txt', (err) => {
//             if (err) {
//                 res.end('Error deleting file or file does not exist');
//             } else {
//                 res.end('File deleted successfully!');
//             }
//         });
//     } else {
//         res.end('Invalid Route!');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });



//  << *** HTTP METHOD *** >>

// const express = require('express');
// const app = express();
// app.use(express.json());

// let users = [{ id: 1, name: 'Alice' },
//      { id: 2, name: 'Bob' }];

//     //  get method

// app.get('/users', (req, res) => res.json(users));

// // post method
// app.post('/users', (req, res) => { 
//     users.push({ id: users.length + 1, name: req.body.name });
//                  res.json({ message: 'User added' }); });

// // put metod
// app.put('/users/:id', (req, res) => {
//     const user = users.find(u => u.id == req.params.id);
// if (!user) 
//     return res.status(404).json({ message: 'User not found' });
// user.name = req.body.name;
// res.json({ message: 'User updated' });
// })

// // delete metod

// app.delete('/users/:id', (req, res) => { 
//    users = users.filter(u => u.id != req.params.id);
  
//      res.json({ message: 'User deleted' }); });

// app.listen(3000, () => console.log('Server running'));