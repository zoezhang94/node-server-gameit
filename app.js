// const express = require('express');
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import UserRoutes from './users/routes.js';
import LikesRoutes from './likes/routes.js';
import mongoose from 'mongoose';
import "dotenv/config";

const CONNECTION_STRING =  "mongodb://127.0.0.1:27017/gameit";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors(
  {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));


app.use(express.json());
UserRoutes(app);
LikesRoutes(app);
app.listen(process.env.PORT || 4000);
