// const express = require('express');
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import UserRoutes from './users/routes.js';
import LikesRoutes from './likes/routes.js';
import FollowRoutes from './follows/routes.js';
import TesterRoutes from './testers/routes.js';
import mongoose from 'mongoose';
import "dotenv/config";


console.log(process.env.FRONTEND_URL);

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || ("mongodb://127.0.0.1:27017/game-it");
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
FollowRoutes(app);
TesterRoutes(app);
app.listen(process.env.PORT || 4000);