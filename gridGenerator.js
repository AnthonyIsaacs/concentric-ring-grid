function generateGridViaForLoops(x, y) {
  let currentRow = '';

  for(let j = 0; j < y; j++) {
    for(let i = 0; i < x; i++) {
      currentRow += Math.min(i + 1, j + 1, x - i, y - j);
    }
    console.log(currentRow);
    currentRow = '';
  }
}

module.exports.generateGridViaForLoops = generateGridViaForLoops;

function generateGridRecursively(x, y) {
  const width = x;
  const height = y;
  const grid = recursiveGrid(x, y, width, height);
  return console.log(grid);
}

function recursiveGrid(x, y, width, height) {
  if (y > 1) {
    return recursiveGrid(x, y - 1, width, height) + recursiveRow(x, y, width, height) + '\n';
  }
  return recursiveRow(x, y, width, height) + '\n';
}

function recursiveRow(x, y, width, height) {
  if (x > 1) {
    return recursiveRow(x - 1, y, width, height) + '' + Math.min(x, y, width + 1 - x, height + 1 - y);
  }
  return Math.min(x, y, width + 1 - x, height + 1 - y) + '';
}

module.exports.generateGridRecursively = generateGridRecursively;
