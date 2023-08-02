const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { db } = require("../logic/db");




// Route: /api/auth/register
router.post("/register", async (req, res) => {
  try {

    const { login, password } = req.body;


    // // Insert user into the database
    const newUser = await db("persone")
      .insert({ login, password })
    //   .returning("*");

    // const token = generateToken(newUser[0]);
    // res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route: /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Fetch the user from the database
    const user = await db("template1").where("username", username).first();

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/words', (req, res) => {
  const wordObject = {
    word1: 'Hello',
    word2: 'World',
  };

  res.json(wordObject);
});

module.exports = router;