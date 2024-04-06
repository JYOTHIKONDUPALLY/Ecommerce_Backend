const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { authService, userService, tokenService } = require("../services");
const { resourceLimits } = require("worker_threads");
const { http } = require("winston");


const register = catchAsync(async (req, res) => {
  // try{
  const userData = req.body;

  const user = await userService.createUser(userData);
  const tokens = await tokenService.generateAuthTokens(user);

  res.status(httpStatus.CREATED).json({ user, tokens });

  // }catch(error){
  //   throw error;
  // }
});

/**
 * Perform the following steps:
 * -  Call the authservice to verify is password and email is valid
 * -  Generate auth tokens
 * -  Send back
 * --- "200 OK" status code
 * --- response in the given format
 *
 * Example response:
 *
 * {
 *  "user": {
 *      "_id": "5f71b31888ba6b128ba16205",
 *      "name": "crio-user",
 *      "email": "crio-user@gmail.com",
 *      "password": "$2a$08$bzJ999eS9JLJFLj/oB4he.0UdXxcwf0WS5lbgxFKgFYtA5vV9I3vC",
 *      "createdAt": "2020-09-28T09:55:36.358Z",
 *      "updatedAt": "2020-09-28T09:55:36.358Z",
 *      "__v": 0
 *  },
 *  "tokens": {
 *      "access": {
 *          "token": "eyJhbGciOiJIUz....",
 *          "expires": "2020-10-22T09:29:01.745Z"
 *      }
 *  }
 *}
 *
 */
const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const verify = await authService.loginUserWithEmailAndPassword(
    email,
    password
  );
  if (verify) {
    const token = await tokenService.generateAuthTokens(verify);
    res.status(200).json({ user: verify, tokens: token });
  }
   else {
    res.status(httpStatus.UNAUTHORIZED).json({ message: "Login Failed" });
  }
});

module.exports = {
  register,
  login,
};
