const express = require('express');
const config = require('./server/config/default.json');
const mongoose = require("mongoose");

const app = express();

app.use('/api', require('./server/routes/config.routes'));

const PORT = config.port || 5000;

async function start() {
    try {
        await mongoose.connect(config.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log('server already started on port:', PORT);
        })
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();
