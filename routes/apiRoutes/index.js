const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { runInNewContext } = require('vm');


router.get('/notes', (req, res) => {
    let data = fs.readFileSync(path.join(__dirname, '../../db/db.json'),'utf-8');
    data = JSON.parse(data);
    res.json(data);
});

// Create an `/add` route that returns `add.html`
router.post('/notes', (req, res) => {
    let newNote = req.body;
    let noteHistory = fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf-8');
    let arr = JSON.parse(noteHistory); 
    arr.push(newNote); 
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),JSON.stringify(arr));
    res.json('new file saved'); 
});



module.exports = router; 