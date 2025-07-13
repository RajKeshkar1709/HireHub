const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const UserModel = require("../models/user.model");

const register = (req, res) => {
  const { name, email, password, role, profile } = req.body;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const userData = {
        name,
        email,
        password: hash,
        role
      };

      // ✅ Add profile only if role is jobseeker
      if (role === "jobseeker") {
        userData.profile = {
          skills: profile?.skills || [],
          experience: profile?.experience || 0,
          qualification: profile?.qualification || ""
        };
      }

      const user = await UserModel.create(userData);
      res.status(201).json({ user });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const hash = user.password;

    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (result) {
        const token = jwt.sign( { id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" } );
         res.json({
    message: "Login SuccessFully",
    token,
    user: {
      role: user.role
    }
  })
        
      } else {
        res.status(401).json({ message: "Wrong PassWord" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login };
