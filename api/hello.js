// Simple test endpoint – CommonJS, no ESM compilation
module.exports = function handler(req, res) {
  res.status(200).json({
    message: 'API is working!',
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
  });
};
