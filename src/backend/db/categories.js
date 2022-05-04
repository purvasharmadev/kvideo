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
    categoryName: "Thriller",
    img:"https://i.pinimg.com/originals/bd/98/d2/bd98d2453efe9ca13d3fe47ee53025d0.gif"
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    img:"https://data.whicdn.com/images/333056039/original.gif"

  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    img:"https://c.tenor.com/nsk_Q1JeZAEAAAAC/kim-ji-won-fight-for-my-way.gif"

  }
];
