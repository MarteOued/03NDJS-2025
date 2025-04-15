import * as cheerio from 'cheerio';

const $ = await cheerio.fromURL('https://www.w3schools.com/html/html_tables.asp');

const data = [];

// Cible le tableau avec l'id "customers"

$('#customers tbody tr').each((i, row) => {
  // Ignore l'en-tête (ligne 0)
  if (i === 0) return;

  const columns = $(row).find('td');
  const company = $(columns[0]).text().trim();
  const contact = $(columns[1]).text().trim();
  const country = $(columns[2]).text().trim();

  // Ajoute un objet dans le tableau
  data.push({
    company,
    contact,
    country
  });
});

console.log(data);

