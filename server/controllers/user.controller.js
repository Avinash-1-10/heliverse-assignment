import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const getUsers = async (req, res, next) => {
  try {
    const { page = 1, name, domain, gender, available } = req.query;
    const pageSize = 20;

    const query = {};
    if (name) {
      query.$or = [
        { first_name: { $regex: name, $options: "i" } },
        { last_name: { $regex: name, $options: "i" } },
      ];
    }
    if (domain) {
      query.domain = domain;
    }
    if (gender) {
      query.gender = gender;
    }
    if (available) {
      query.available = available === "true";
    }

    const totalUsers = await User.countDocuments(query);

    const totalPages = Math.ceil(totalUsers / pageSize);

    const skip = (page - 1) * pageSize;

    const users = await User.find(query).skip(skip).limit(pageSize);

    res.json({
      users,
      page: parseInt(page),
      pageSize,
      totalUsers,
      totalPages,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    return next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, gender, domain, available } =
      req.body;
    const avatar = req.body.avatar || `https://robohash.org/${first_name}`;
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    });
    return res
      .status(201)
      .json(new ApiResponse(201, newUser, "User Created Successfully"));
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, gender, domain, available } =
      req.body;
    const avatar = req.body.avatar || `https://robohash.org/${first_name}`;
    const user = await User.findById(id);
    if (!user) {
      return next(new ApiError(400, "User not found"));
    }

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.gender = gender;
    user.avatar = avatar;
    user.domain = domain;
    user.available = available;

    await user.save();

    return res
      .status(200)
      .json(new ApiResponse(200, user, "User Updated Successfully"));
  } catch (error) {
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res
      .status(200)
      .json(new ApiResponse(200, null, "User Deleted Successfully"));
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
