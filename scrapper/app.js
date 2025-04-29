import process from "process";

import axios from "axios";
import * as cheerio from 'cheerio';

import loadSchema from "./schema.js";

async function run(site) {
    const config = loadSchema(site);
    const {
        rootUrl,
        rootList,
        listSelector,
        productSelector,
        priceSelector,
        coverSelector,
        authorSelector,
        titleSelector,
        listPageIterator
    } = config.schema;


    const page = 1;
    const url = `${rootList}${listPageIterator.replace('{}', page)}`;

    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const section = $(listSelector);
    const products = section.find(productSelector);

    products.each((i, el) => {
        const _id = generateCouchDBId();
        const href = $(el).attr('href');
        const url = `${rootUrl}${href}`;
        const title = $(el).find(titleSelector).text().trim();
        const author = $(el).find(authorSelector).text().trim();
        const price = $(el).find(priceSelector).text().trim();

        const coverElement = $(el).find(coverSelector);
        const coverLink = coverElement.attr("data-src") ? coverElement.attr("data-src") : coverElement.attr("src");
        // TODO - baixar a imagem do coverLink
        // TODO - recortar a imagem pelo conteúdo (python? js?)

        const bookBuilt = {
            _id,
            url,
            title,
            author,
            price
        }

        // TODO - subir o objeto com o attachment...
    });
}

if (process.argv[2]) {
    run(process.argv[2]);
}
else {
    throw new Error("ERRO: use o processo passando o nome de um site como argumento!\nnode app.js estante-virtual");
}