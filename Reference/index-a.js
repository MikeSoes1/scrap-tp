import axios from "axios";
import * as cheerio from "cheerio";

axios
  .get("https://www.imdb.com/chart/top/")

  .then((urlResponse) => {
    const $ = cheerio.load(urlResponse.data);

    $(
      "ul.ipc-metadata-list ipc-metadata-list--dividers-between sc-71ed9118-0 kxsUNk compact-list-view ipc-metadata-list--base"
    ).each((i, element) => {
      //const title = $(element).find("a").attr("title");
      const title = $(element)
        .find("li")
        .children("li")
        .children("div")
        .children("a")
        .text();

      console.log(`${i + 1}. Nama: ${title}, harga: ${price} `);
    });
  });
