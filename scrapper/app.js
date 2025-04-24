import axios from "axios";
import * as cheerio from 'cheerio';

import extract from "./extract.js";
import loadSchema from "./schema.js";

async function run(site) {
    const config = loadSchema(site);
    const {
        rootUrl,
        rootList,
        listSelector,
        productSelector,
        listPageIterator
    } = config.schema;

    const page = 1; // exemplo: pode iterar dinamicamente depois
    const url = `${rootList}${listPageIterator.replace('{}', page)}`;

    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const section = $(listSelector);
    const products = section.find(productSelector);

    products.each((i, el) => {
        const link = $(el).attr('href'); // pega o atributo href
        const texto = $(el).text().trim(); // pega o texto dentro da tag <a>

        console.log(`[${i}] ${rootUrl}${link}`);
    });
}

run('estante-virtual');