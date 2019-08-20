const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  baseURL: process.env.API_BASE_URL,
  clientID: process.env.CLIENT_ID,
  email: process.env.EMAIL,
  name: process.env.NAME,
  totalPages: process.env.TOTAL_PAGES || 10,
  cacheTTL: process.env.CACHE_TTL || 3600,
};
