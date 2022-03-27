const { Router } = require('express');
const router = Router();

router.post('/auth/register', async (req, res) => {
    try {

        const { name, email, password } = req.body;

    } catch (e) {
        res.status(500).json({message: 'Ooops... Seems like server returned the error'})
    }
});

router.post('/auth/login', async (req, res) => {

});

module.exports = router;