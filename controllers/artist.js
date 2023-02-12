const Artist = require("../models/artist");


// Create artist
exports.createArtist = (req, res ) => {
    const art = new Artist(req.body);

    art.save()
    .then((artist) =>{
       return res.status(201).json({artist});
    })
    .catch((error) => {
       return res.status(400).json({error});
    });

}

// Get one artists
exports.getOneArtist = (req, res) => {
    const id = req.params.id;

    Artist.findOne({ _id: id })
    .then((artist) => {
        return res.status(200).json({artist});
    })
    .catch((error) => {
        return res.status(404).json({error});
    });
};

// Get all artists
exports.getAllArtists = (req, res) => {
    Artist.find()
    .then((artists) => {
        return res.status(200).json({artists});
    })
    .catch((error) => {
        return res.status(400).json({error});
    });
};