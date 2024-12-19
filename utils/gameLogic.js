export const calculateScore = (points, multiplier = 1) => {
  return points * multiplier;
};

export const determineLevel = (score) => {
  return Math.floor(score / 100) + 1;
};

export const checkAchievement = (score, achievements) => {
  return achievements.filter(achievement => 
    score >= achievement.requiredScore && !achievement.unlocked
  );
};
