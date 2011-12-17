module.exports = function(app, db) {
 
     app.get('/cars', function(req, res) {
 
           var Cars = require('../schemas/carmodel')(db);
           Cars.findOne({name:'MyCar'}, function (err, collection) {
                if(err) {
                     req.flash('error', err);
                     return res.redirect('/');
                }
                
                if(!collection){
                     collection = {  name: 'None Found',
                                     serial : '12345'
                     };
                };
 
                res.render('cars', {
                     title: 'Car Collectables',
                     cars : collection
                });
           });
     });
};

