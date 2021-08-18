const jwt = require('jsonwebtoken');
const { SALT } = require('../config');
const { AttractionModel } = require('../DataBase/model-attractions/attractions');
const { FoodModel } = require('../DataBase/model-brunch/brunch');


//nessa parte pode entrar Api gateway kong

const createTokenForUser = async(user) => {
    const token = jwt.sign({ role: user.role }, SALT);

    // eslint-disable-next-line no-param-reassign
    if (!user.tokens) user.tokens = [token];
    else user.tokens.push(token);

    await user.save();

    return token;
};

const findUserByToken = async(token) => {
    const user = await UserModel.findOne({ tokens: token });

    return user;
};

const logoffUser = async(user) => {
    // eslint-disable-next-line no-param-reassign
    user.tokens = [];
    await user.save();
};

module.exports = {
    createTokenForUser,
    findUserByToken,
    logoffUser,
};