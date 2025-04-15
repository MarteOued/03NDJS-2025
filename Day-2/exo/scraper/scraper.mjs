import * as cheerio from 'cheerio';
import fs from 'fs';

const $ = await cheerio.fromURL('https://www.w3schools.com/html/html_tables.asp');

const data = [];

$('#customers tbody tr').each((i, row) => {
  if (i === 0) return;

  const columns = $(row).find('td');
  const company = $(columns[0]).text().trim();
  const contact = $(columns[1]).text().trim();
  const country = $(columns[2]).text().trim();

  data.push({ company, contact, country });
});

fs.writeFileSync('resultats.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('Données sauvegardées dans resultats.json');


