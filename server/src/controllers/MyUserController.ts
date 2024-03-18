import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if the user exists
  // 2. create the user if it doesn't exist
  // 3. returned the user object to the calling client

  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id }); //finds user with auth0id

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save(); //save to db

    res.status(201).json(newUser.toObject()); //toObject converts the document to js object
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: "Error creating user" }); //not passing error object to client as it can contain sensitive info
  }
};

export default { createCurrentUser };
