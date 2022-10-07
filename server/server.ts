// express boilerplate for server routing
const express = require('express'); // bring in express
const app = express(); // initialize app
const PORT = process.env.PORT || 3001; // define port
const userRoutes = require('./routes/user-routes'); // point to route configs
const imageRoutes = require('./routes/image-upload'); // point to image uploading routes

// express middleware, used to be bodyparser
app.use(express.json()); // able to send JSONS
app.use(express.urlencoded({ extended: true})); // full param support in URLS

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use('/api/', userRoutes); // app.use(require('./routes'));

// Start the API server
app.listen(PORT, () => console.log(`🌎 ===> API Server now listening on PORT ${PORT}!`),);