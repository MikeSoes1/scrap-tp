import axios from "axios";
import * as cheerio from "cheerio";
import colors from "colors";

// Rest of your code

axios
  .get("https://arstechnica.com/information-technology/")
  .then((urlResponse) => {
    const $ = cheerio.load(urlResponse.data);

    $("li.article").each((i, element) => {
      const title = $(element)
        .find("header")
        .children("h2")
        .children("a")
        .text();
      const link = $(element).find("a.overlay").attr("href");

      console.log(`${i + 1}. Headline: ${title}.
      Link: ${link.cyan}`);
      console.log("---------------------\n");
    });
  });
