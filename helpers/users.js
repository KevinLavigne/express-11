const crypto = require('crypto');

const PRYVATE_KEY = process.env.PRYVATE_KEY;

const calculateToken = (userEmail = '') => {
	return crypto
		.createHash('md5')
		.update(userEmail + PRYVATE_KEY)
		.digest('hex');
};

module.exports = { calculateToken };
