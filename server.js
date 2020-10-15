const dotenv = require('dotenv');

dotenv.config({path: "./config.env"});
const app = require('./app');

const PORT = 3006;

app.listen(PORT);
console.log(`Server has started on ${PORT}`);