// 1. Define your two ranges in an array
const ranges = [
    { min: -100, max: 0 },
    { min:  800, max: 900 }
  ];

  // 2. Helper: random integer inclusive between min and max
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 3. Pick one range at random and generate within it
  function getRandomFromTwoRanges() {
    const { min, max } = ranges[Math.floor(Math.random() * ranges.length)];
    return randInt(min, max);
  }
 // 4. Assign to a button
  document.getElementById('generateBtn').addEventListener('click', () => {
    document.getElementById('result').textContent = getRandomFromTwoRanges();
  });