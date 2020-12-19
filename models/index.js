const Profile = require('./Profile');
const Owner = require('./Owner')


Owner.hasMany(Pets)

Pets.belongsTo(Owner)
  

//module.exports = ??;