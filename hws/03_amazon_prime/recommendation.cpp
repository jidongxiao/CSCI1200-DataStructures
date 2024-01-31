#include "recommendation.h"
#include <cmath>

// implement collaborative filtering to recommend movies to a user based on the ratings of similar users. The predicted ratings are used to identify movies that the target user might like, and the recommendations are filtered based on a threshold.
// this function returns a list of movie IDs recommended for the user, in recommendedMovies; it assumes the caller would allocate memory for recommendedMovies.
void RecommendationSystem::recommendMovies(int userId, int numRecommendations, int* recommendedMovies) const {

	// to count how many movies are recommended.
	int index = 0;
	// check if the given userId is valid
	if (userId < 0 || userId >= numUsers) {
		// handle invalid userId
		return;
	}

	// calculate similarity scores between the target user (userId) and other users
	// compute the similarity between the target user and all other users based on their movie ratings using the cosine similarity measure. The resulting similarity scores are stored in the similarityScores array. This information can then be used to recommend movies to the target user based on the preferences of similar users.
	double* similarityScores = new double[numUsers];
	for(int i=0; i<numUsers; i++){
		// initialize every element in the array to 0.0.
		similarityScores[i] = 0.0;
	};

	for (int otherUserId = 0; otherUserId < numUsers; ++otherUserId) {
		if (otherUserId != userId) {
			// calculate similarity using a simple dot product
			double dotProduct = 0.0;
			double magnitudeA = 0.0;
			double magnitudeB = 0.0;

			for (int movieId = 0; movieId < numMovies; ++movieId) {
				dotProduct += userMovieRatingsMatrix[userId][movieId] * userMovieRatingsMatrix[otherUserId][movieId];
				magnitudeA += userMovieRatingsMatrix[userId][movieId] * userMovieRatingsMatrix[userId][movieId];
				magnitudeB += userMovieRatingsMatrix[otherUserId][movieId] * userMovieRatingsMatrix[otherUserId][movieId];
			}

			// avoid division by zero
			// the similarity should be in the range of [0,1], with 1 being perfectly similar, and 0 being no similarity.
			double similarity = (magnitudeA > 0.0 && magnitudeB > 0.0) ? dotProduct / (sqrt(magnitudeA) * sqrt(magnitudeB)) : 0.0;
			// store the similarity score
			similarityScores[otherUserId] = similarity;
		}
	}

	// identify users with high similarity and recommend movies they liked
	for (int movieId = 0; movieId < numMovies; ++movieId) {
		// user hasn't rated this movie: it's pointless to recommend a movie to the user if the user has already rated this movie.
		if (userMovieRatingsMatrix[userId][movieId] == 0) {
		
			// use these two variables to calculate a weighted sum of ratings from similar users	
			// and the total similarity across those users.
			double weightedSum = 0.0;
			double totalSimilarity = 0.0;

			int count = 0;
			// calculate a weighted sum of ratings from similar users
			for (int otherUserId = 0; otherUserId < numUsers; ++otherUserId) {
				// userMovieRatings[otherUserId][movieId] > 0.0 means we only consider users who have rated this movie
				// users who have not rated this movie should not be contributing to the totalSimilarity.
				if (otherUserId != userId && userMovieRatingsMatrix[otherUserId][movieId] > 0) {
					// similar users therefore have a higher weight.
					// in other words, the ratings from similar users contribute more to predicting the target user's rating.
					weightedSum += similarityScores[otherUserId] * userMovieRatingsMatrix[otherUserId][movieId];
					totalSimilarity += std::abs(similarityScores[otherUserId]);
					count++;
				}
			}

			// avoid division by zero
			double predictedRating = (totalSimilarity > 0.0) ? weightedSum / totalSimilarity : 0.0;

			// for simplicity, consider recommending movies with predicted ratings greater than a threshold
			if (predictedRating > 3.0) {
				recommendedMovies[index] = movieId;
				index++;
			}

			// stop when the desired number of recommendations is reached
			if (index >= numRecommendations) {
				break;
			}
		}
	}

	// reclaim memory.
	delete [] similarityScores;
	return;
}

// this function returns a list of tv show IDs recommended for the user, in recommendedShows; it assumes the caller would allocate memory for recommendedShows.
void RecommendationSystem::recommendShows(int userId, int numRecommendations, int* recommendedShows) const {
	// to count how many movies are recommended.
	int index = 0;
	// check if the given userId is valid
	if (userId < 0 || userId >= numUsers) {
		// handle invalid userId
		return;
	}

	// calculate similarity scores between the target user (userId) and other users
	// compute the similarity between the target user and all other users based on their show ratings using the cosine similarity measure. The resulting similarity scores are stored in the similarityScores array. This information can then be used to recommend shows to the target user based on the preferences of similar users.
	double* similarityScores = new double[numUsers];
	for(int i=0; i<numUsers; i++){
		// initialize every element in the array to 0.0.
		similarityScores[i] = 0.0;
	};

	for (int otherUserId = 0; otherUserId < numUsers; ++otherUserId) {
		if (otherUserId != userId) {
			// calculate similarity using a simple dot product
			double dotProduct = 0.0;
			double magnitudeA = 0.0;
			double magnitudeB = 0.0;

			for (int showId = 0; showId < numShows; ++showId) {
				dotProduct += userShowRatingsMatrix[userId][showId] * userShowRatingsMatrix[otherUserId][showId];
				magnitudeA += userShowRatingsMatrix[userId][showId] * userShowRatingsMatrix[userId][showId];
				magnitudeB += userShowRatingsMatrix[otherUserId][showId] * userShowRatingsMatrix[otherUserId][showId];
			}

			// avoid division by zero
			double similarity = (magnitudeA > 0.0 && magnitudeB > 0.0) ? dotProduct / (sqrt(magnitudeA) * sqrt(magnitudeB)) : 0.0;

			// store the similarity score
			similarityScores[otherUserId] = similarity;
		}
	}

	// identify users with high similarity and recommend shows they liked
	for (int showId = 0; showId < numShows; ++showId) {
		if (userShowRatingsMatrix[userId][showId] == 0) {  // User hasn't rated this show
			double weightedSum = 0.0;
			double totalSimilarity = 0.0;

			// calculate a weighted sum of ratings from similar users
			for (int otherUserId = 0; otherUserId < numUsers; ++otherUserId) {
				if (otherUserId != userId && userShowRatingsMatrix[otherUserId][showId] > 0) {
					weightedSum += similarityScores[otherUserId] * userShowRatingsMatrix[otherUserId][showId];
					totalSimilarity += std::abs(similarityScores[otherUserId]);
				}
			}

			// avoid division by zero
			double predictedRating = (totalSimilarity > 0.0) ? weightedSum / totalSimilarity : 0.0;

			// for simplicity, consider recommending shows with predicted ratings greater than a threshold
			if (predictedRating > 3.0) {
				recommendedShows[index] = showId;
				index++;
			}

			// stop when the desired number of recommendations is reached
			if (index >= numRecommendations) {
				break;
			}
		}
	}

	// reclaim memory.
	delete [] similarityScores;
	return;
}
