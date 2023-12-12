// const express = require('express');
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import UserRoutes from './users/routes.js';
import LikesRoutes from './likes/routes.js';
import CreatorRoutes from './creators/routes.js';
import mongoose from 'mongoose';
import "dotenv/config";

mongoose.connect("mongodb://127.0.0.1:27017/game-it");

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
app.use(session(sessionOptions));


app.use(express.json());
UserRoutes(app);
LikesRoutes(app);
CreatorRoutes(app);
app.listen(4000);