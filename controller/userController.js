const User = require('../modules/user');

exports.createUser = async(req,res) => {
    try{
        const user = await User.create(req,body);
        res.json(user);
    } catch(err) {
        res.json(err);
    }
};

exports.getUser = async(req,res) => {
    try{
        const user = await User.find();
        res.json(user);
    } catch(err) {
        res.json(err);
    }
};

exports.updateUser = async(req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.Params.id,req.body,{new:true});
        res.json(user);
    } catch(err) {
        res.json(err);
    }
};

exports.updateUser = async(req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.Params.id);
        res.json({meassage: "User deleted"});
    } catch(err) {
        res.json(err);
    }
};