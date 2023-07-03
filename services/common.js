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
  token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTI3MWQ1MDQ5YzFmYzIwZjQ4MGQ4ZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg4MzY3NTczfQ.9fTOB5HAMjNVejlIU3_BPpNGsTSdx2r1kUSTnBeCzrw";

  return token;
};
