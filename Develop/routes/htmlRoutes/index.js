const router = require('express').Router(); 
const path = require('path'); 


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Create an `/add` route that returns `add.html`
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});



module.exports = router; 