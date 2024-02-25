import axios from "axios";
import * as cheerio from "cheerio";

axios
  .get(
    "https://www.tokopedia.com/search?st=&q=macbook%20m1&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource="
  )

  .then((urlResponse) => {
    const $ = cheerio.load(urlResponse.data);

    $("div.css-1asz3by").each((i, element) => {
      const title = $(element).find("a").attr("title");
      const price = $(element)
        .find("a")
        .children("div")
        .children(".css-h66vau")
        .text();

      console.log(`${i + 1}. Nama: ${title}, harga: ${price} `);
    });
  });
