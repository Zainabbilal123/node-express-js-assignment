// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Logging Middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`);
//     next();
// });

// // Authentication Middleware
// const authMiddleware = (req, res, next) => {
//     if (req.query.auth === 'true') 
//         next();
//     else 
//     res.status(403).json({ message: 'Access Denied' });
// };

// app.get('/profile', authMiddleware, (req, res) => {
//     res.json({ message: 'Welcome to your profile' });
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     res.status(500).json({ message: 'Something went wrong' });
// });

// app.listen(5000, () => console.log('Server running'));
