const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('../config/default.json')
const { check, validationResult } = require('express-validator');
const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum 6 symbols').isLength({ min: 6 }),
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

        const { name, email, password } = req.body;

        const candidate = await Doctor.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'User already created' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const doctor = new Doctor({ name, email, password: hashedPassword });

        await doctor.save();

        res.status(201).json({ message: 'User created' });

    } catch (e) {
        res.status(500).json({message: 'Ooops... Seems like server returned the error'})
    }
});

router.post(
    '/login',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum 6 symbols').exists(),
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

            const {email, password} = req.body;

            const doctor = await Doctor.findOne({ email });

            if (!doctor) {
                return res.status(400).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, doctor.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password' });
            }

            const token = jwt.sign(
                { userId: doctor.id },
                config.jwtSecret,
                {expiresIn: '1h'},
            );

            res.json({ token, doctorId: doctor.id });

        } catch (e) {
            res.status(500).json({message: 'Ooops... Seems like server returned the error'})
        }
    });

module.exports = router;