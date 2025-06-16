#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const pdf2md = require('@opendocsg/pdf2md');

async function main() {
  const [,, input, output] = process.argv;
  if (!input) {
    console.error('Usage: node scripts/pdf2md-cli.js <input.pdf> [output.md]');
    process.exit(1);
  }
  try {
    const buffer = fs.readFileSync(path.resolve(input));
    const markdown = await pdf2md(buffer);
    if (output) {
      fs.writeFileSync(path.resolve(output), markdown);
    } else {
      process.stdout.write(markdown);
    }
  } catch (err) {
    console.error('Error converting PDF:', err.message);
    process.exit(1);
  }
}

main();
