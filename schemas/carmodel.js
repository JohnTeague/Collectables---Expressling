module.exports = function(db) {
  var Carmodel = new db.Schema({
      name    : { type: String }
    , serial  : { type: String }
  });
 
  return db.model('Carmodel', Carmodel);
};

