const userRepository = require('../repositories/users');
const applicationRepository = require('../repositories/applications');
const companiesRepository = require('../repositories/companies');
const listingRepository = require('../repositories/listings');

module.exports.getTopActivityUsers = async (req, res, next) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = page > 1 ? page * pageSize - pageSize : 0;
    const limit = page >= 1 ? page * pageSize - 1 : 0;

    const data = await userRepository.getTopActiveUsers(offset, limit);

    return res.send(data);
  } catch (error) {
    return next(error);
  }
};

module.exports.getUserById = async (req, res, next) => {
  try {
    const { id = '' } = req.query;
    if (!id) {
      throw new Error('The "id" is required');
    }

    const userData = await userRepository.getUserById(id);

    if (userData.length === 0) {
      return res.status(404).send('User not found');
    }

    const companies = await companiesRepository.getCompaniesByUserId(id);

    const createdListings = await listingRepository.getListingsByUserId(id);

    const applications = await applicationRepository.getApplicationsByUserId(
      id
    );

    const response = {
      ...userData[0],
      companies,
      createdListings,
      applications
    };

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};
