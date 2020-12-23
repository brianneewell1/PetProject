const Pet = require('./Pet');
const Owner = require('./Owner');



Owner.hasMany(Pet, {
    foreign_key: 'user_id'
});

Pet.belongsTo(Owner, {
    foreign_key: 'user_id'
        
});
  

module.exports = { Pet, Owner};