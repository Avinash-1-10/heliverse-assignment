import User from "../models/user.model.js";


const getUsers = async (req, res, next) => {
    try {
        const { page = 1, name, domain, gender } = req.query;
        console.log(name)
        const pageSize = 20;

        // Constructing the query
        const query = {};
        if (name) {
            query.$or = [
                { first_name: { $regex: name, $options: "i" } },
                { last_name: { $regex: name, $options: "i" } }
            ];
        }
        if (domain) {
            query.domain = domain;
        }
        if (gender) {
            query.gender = gender;
        }

        // Count total users
        const totalUsers = await User.countDocuments(query);

        // Calculate total pages
        const totalPages = Math.ceil(totalUsers / pageSize);

        // Limit and skip for pagination
        const skip = (page - 1) * pageSize;

        // Fetch users
        const users = await User.find(query)
            .skip(skip)
            .limit(pageSize);

        res.json({
            users,
            page: parseInt(page),
            pageSize,
            totalUsers,
            totalPages
        });
    } catch (error) {
        next(error);
    }
};


const getUserById = async (req, res,next) => {};
const createUser = async (req, res,next) => {};
const updateUser = async (req, res,next) => {};

export {getUsers, getUserById, createUser, updateUser}
