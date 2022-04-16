const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('../config/default.json')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Incorrect email.').isEmail(),
        check('password', 'Incorrect password').isLength({ min: 4 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                massage: 'Incorrect data'
            })
        }

        const { email, password } = req.body;
        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'User already registered.' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message: 'User successfully created.' })

    } catch (e) {
        res.status(500).json({ message: 'Server error, try again.', e });
    }
});

router.post(
    '/login',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Incorrect password').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data',
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password' });
            }

            const token = jwt.sign(
                { userId: user.id },
                config.jwtSecret,
                {expiresIn: '1h'},
            );

            res.json({ token, userId: user.id });

        } catch (e) {
            res.status(500).json({message: 'Ooops... Seems like server returned the error'})
        }
    });

module.exports = router;