const express = require('express');
const config = require('./server/config/default.json');
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./server/routes/auth.routes'));

const PORT = config.port || 3000;

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
