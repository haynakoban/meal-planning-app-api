const express = require('express');
const app = express();
const router = express.Router();
const http = require('http').createServer(app);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();

require('./config/connection').connectToDatabase();

const PORT = process.env.PORT || 5000;
const HOST = 'localhost';

// session cookies
if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
}

app.use(
  cors({
    origin: ['http://localhost:3000', '*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const { seed } = require('./controllers');
app.post('/api/seed', seed);
app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/cuisines', require('./routes/cuisinesRoute'));
app.use('/api/feedbacks', require('./routes/feedbacksRoute'));
app.use('/api/ingredients', require('./routes/ingredientsRoute'));
app.use('/api/meals', require('./routes/mealsRoute'));
app.use('/api/preferences', require('./routes/preferencesRoute'));
app.use('/api/recipes', require('./routes/recipesRoute'));
app.use('/api/users', require('./routes/usersRoute'));

// Listen on the specified IP address and port
http.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
