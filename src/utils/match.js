export function findMatch(user, list) {
  let best = null;
  let bestScore = 0;

  list.forEach(item => {
    let score = 0;

    if (Math.abs(user.age - item.age) < 3) score += 30;
    if (user.city === item.city) score += 20;
    if (Math.abs(user.height - item.height) < 10) score += 20;
    if (user.job === item.job) score += 15;
    if (user.salary >= item.salary) score += 15;

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  });

  return { best, score: bestScore };
}