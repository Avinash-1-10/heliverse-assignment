import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum: [
      "Male",
      "Agender",
      "Polygender",
      "Bigender",
      "Genderqueer",
      "Genderfluid",
      "Non-binary",
      "Female",
    ],
  },
  avatar: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
    enum: [
      "Sales",
      "IT",
      "Marketing",
      "Business Development",
      "Management",
      "UI Designing",
      "Finance",
    ],
  },
  available: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
