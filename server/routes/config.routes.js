const { Router } = require('express');
const router = Router();

router.post('/config', async (req, res) => {
    console.log('hello')
});

module.exports = router;