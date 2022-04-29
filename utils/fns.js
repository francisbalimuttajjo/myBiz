exports.sendResponse = (req, res, statusCode, data, status) => {
  return res.status(statusCode).json({
    status: status ? "fail" : "success",
    data,
  });
};
