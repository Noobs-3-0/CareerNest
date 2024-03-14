import { BadRequestError } from "../errors/index.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please Provide all values");
  }
  const UserAlreadyExists = await User.findOne({ email });
  if (UserAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
  const token=user.createJWT();
  res.status(StatusCodes.CREATED).json({ user:
    {email:user.email,
      lastName:user.lastName,
      location:user.location,
      name:user.name
    },
      token,
      location:user.location });
};

const login = (req, res) => {
  res.send("login user");
};

const updateUser = (req, res) => {
  res.send("Updated user");
};

export { register, login, updateUser };
