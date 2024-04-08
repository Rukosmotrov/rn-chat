const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const MONGO_URL =
  "mongodb+srv://drukosmotrov:testing1234@cluster-rn-chat.8snsfyg.mongodb.net/";

const JWT_SECRET = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMjQ4OTAxMywiaWF0IjoxNzEyNDg5MDEzfQ.iOpGrULB4tCy18YUmLLMVj-wY_9N09H172oMBNuAHiQ"

const app = express();
app.use(express.json())

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

require('./schemas/user')
const User = mongoose.model("users")

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});

app.get('/api/check-email', async (req, res) => {
  const { email } = req.query

  const isEmailInUse = await User.findOne({ email })

  res.json({ isEmailInUse: !!isEmailInUse })
});

app.post("/api/register", async (req, res) => {
    const { email, password } = req.body

    const encryptedPassword = await bcrypt.hash(password, 10)

    try {
        await User.create({
            // username,
            email,
            password: encryptedPassword
        })

        res.send({ status: '201', message: "user created" })
    } catch (err) {
        res.send({ status: '404', message: err })
    }
})

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET)

    if (res.status(201)) {
      return res.send({ status: "201", data: token  })
    } else {
      return res.send({ message: "wrong password"  })
    }
  }
})

app.post("/api/userdata", async (req, res) => {
  const { token } = req.body

  try {
    const user = jwt.verify(token, JWT_SECRET)
    const email = user.email

    User.findOne({ email }).then(data => {
      return res.send({ status: "201", data })
    })
  } catch (error) {
    res.send({ error })
  }
})

app.listen(5001, () => {
  console.log("NodeJS listening on port 5001");
});
