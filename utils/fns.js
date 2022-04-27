exports.sendResponse = (req, res, statusCode, message, status) => {
  return res.status(statusCode).json({
    status: status ? "fail" : "success",
    message,
  });
};
