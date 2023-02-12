const express = require('express');
const router = express.Router();
const ArtistCtrl = require('../controllers/artist');

router.post('/', ArtistCtrl.createArtist);
router.get('/:id', ArtistCtrl.getOneArtist);
router.get('/', ArtistCtrl.getAllArtists);

module.exports = router;