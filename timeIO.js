const fs = require("fs");

function readNumbersFromFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  return data;
}

function main() {
  const iter = 1000000;

  console.time("Read file");
  const filename = "sample_data.txt";
  for (let i = 0; i < iter; i++) {
    const data = readNumbersFromFile(filename);
  }
  console.timeEnd("Read file");
  
  console.time("Add Numbers");
  let total = 0;
  for (let i = 0; i < iter; i++) {
    total += i;
  }
  console.timeEnd("Add Numbers");

  console.time("Output");
  for (let i = 0; i < iter; i++) {
    process.stdout.write("running " + i + "\r");
  }
  console.timeEnd("Output");
}

main();
