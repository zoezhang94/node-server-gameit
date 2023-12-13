import model from "./model.js";

export const userFollowsUser = (follower, followee) =>
  model.create({ follower, followee });
export const userUnfollowsUser = (follower, followee) =>
  model.deleteOne({ follower, followee });
export const findFollowersOfUser = (followee) =>
  model.find({ followee }).populate("follower");
export const findFolloweeOfUser = (follower) =>
  model.find({ follower }).populate("followee");