const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/players', function(req, res){
    db.player.findAll().then(function(players){
        res.json(players);
    });
});

app.get('/players/:id', function(req, res){
    db.player.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(user){
        res.json(user);
    })
})
app.post('/players', function(req, res){
    db.player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: parseInt(req.body.number),
        position: req.body.position,
        team: req.body.team
    }).then(function(data){
        console.log(data);
        res.json(data);
    })
});

app.put('/players/:id', function(req, res){
    db.player.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: parseInt(req.body.number),
        position: req.body.position,
        team: req.body.team
    },{
        where: {id: parseInt(req.params.id)}
    }).then(function(count){
        res.json(count);
    });
});

app.delete('/players/:id', function(req, res){
    db.player.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data){
        res.json(data);
    });
});


app.listen(3000, function(){
    console.log("You're listening");
});
