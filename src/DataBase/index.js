const mongoose = require('mongoose');
const port = 28017;
mongoose.connect(`mongodb://localhost:${port}`, {
    useMongoCliente: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;