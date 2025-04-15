const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.w3schools.com/html/html_tables.asp';

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const data = [];

    // Cible le tableau qui a l'id "customers"
    $('#customers tr').each((i, row) => {
      // Ignore l'en-tête (i = 0)
      if (i === 0) return;

      const columns = $(row).find('td');
      const company = $(columns[0]).text().trim();
      const contact = $(columns[1]).text().trim();
      const country = $(columns[2]).text().trim();

      // Crée un objet pour chaque ligne
      data.push({
        company,
        contact,
        country
      });
    });

    console.log(data);
  })
  .catch((error) => {
    console.error('Erreur lors du chargement de la page :', error);
  });

