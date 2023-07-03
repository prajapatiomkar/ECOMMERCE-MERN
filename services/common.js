const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }

  //for testing purposes puting token here
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTJiN2FjOTM3MmUyZWY4ZGYxZDY2MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg4Mzg1NDUyfQ.uctXACuIkZigE1FM-YSfaxkGSnoh-aKC1xduoZ77KjQ"  

  return token;
};
