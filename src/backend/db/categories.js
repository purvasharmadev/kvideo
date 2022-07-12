import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Drama",
    img:"https://sliceofasianlife.files.wordpress.com/2016/04/descendants-of-the-sun-1.gif"
  },
  {
    _id:uuid(),
    categoryName:"Movies",
    img:"https://thumbs.gfycat.com/CoordinatedReasonableFieldmouse-size_restricted.gif"

  },
  {
    _id: uuid(),
    categoryName: "Variety",
    img:"https://img.buzzfeed.com/buzzfeed-static/static/2018-10/16/6/asset/buzzfeed-prod-web-02/anigif_sub-buzz-24023-1539685203-1.gif"

  },
    {
    _id: uuid(),
    categoryName: "Songs",
    img:"https://c.tenor.com/nsk_Q1JeZAEAAAAC/kim-ji-won-fight-for-my-way.gif"
  }
];
