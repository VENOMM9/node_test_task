const userModel = require("../models/user")
require('dotenv').config()

const getUser =  async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
};
  

  

  module.exports = {
    
      getUser,
      updateBalance
   
   
}