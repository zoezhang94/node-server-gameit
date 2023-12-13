import Tester from './model.js'; 
import User from '../users/model.js';

export const findAllTesters = async () => {
  return await Tester.find();
};


export const addReview = async (userId, reviewData) => {
  const user = await User.findById(userId);
  if (!user) {
      throw new Error('User not found');
  }

  const reviewWithUsername = {
      ...reviewData,
      username: user.username,
      userId: user._id, 
  };

  let tester = await Tester.findOne({ userAccount: userId });
  if (!tester) {
      tester = new Tester({ userAccount: userId, reviews: [] });
  }

  tester.reviews.push(reviewWithUsername);

  await tester.save();

  return tester.reviews[tester.reviews.length - 1];
};


export const findReviewsByGameId = async (gameId) => {
  const testers = await Tester.find({ 'reviews.gameId': gameId });
  const reviews = testers.flatMap(tester => 
      tester.reviews.filter(review => review.gameId === gameId)
  );
  return reviews;
};