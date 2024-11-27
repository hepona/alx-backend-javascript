#!/usr/bin/node
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const line = data.split('\n').filter((l) => l.trim() !== '');
    const word = line.map((l) => l.split(','));
    const NumStudent = word.length - 1;
    console.log(`Number of students: ${NumStudent}`);
    const ListStudCS = [];
    const ListStudSWE = [];
    let CountStudCS = 0;
    let CountStudSWE = 0;
    for (let i = 1; i <= NumStudent; i += 1) {
      if (word[i].includes('CS')) {
        ListStudCS.push(word[i][0]);
        CountStudCS += 1;
      }
      if (word[i].includes('SWE')) {
        ListStudSWE.push(word[i][0]);
        CountStudSWE += 1;
      }
    }
    console.log(`Number of students in CS: ${CountStudCS}. List: ${ListStudCS.join(', ')}`);
    console.log(`Number of students in SWE: ${CountStudSWE}. List: ${ListStudSWE.join(', ')}`);
    return Promise.resolve();
  } catch (error) {
    console.log('Cannot load the database');
    return Promise.reject(error);
  }
}

module.exports = countStudents;
