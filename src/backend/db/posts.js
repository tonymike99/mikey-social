import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    text: "Great team effort and a good victory. We stand together. Let's go, United! 💪",
    image: require("../../assets/images/cristiano_ronaldo_2.jpg").default,
    likes: {
      likeCount: 4545093,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "lionel_messi",
        comment: "Legend! ♥",
      },
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "virat_kohli",
        comment: "GOAT! ♥",
      },
    ],
    username: "cristiano_ronaldo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "I'm living a dream I never want to wake up from.",
    image: "",
    likes: {
      likeCount: 5545093,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "lionel_messi",
        comment: "Legend! ♥",
      },
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "virat_kohli",
        comment: "GOAT! ♥",
      },
    ],
    username: "cristiano_ronaldo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "",
    image: require("../../assets/images/lionel_messi_2.jpg").default,
    likes: {
      likeCount: 3545041,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "cristiano_ronaldo",
        comment: "My brother! 🍻",
      },
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "virat_kohli",
        comment: "GOAT! ♥",
      },
    ],
    username: "lionel_messi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "I have fun like a child in the street. When the day comes when I'm not enjoying it, I will leave football.",
    image: "",
    likes: {
      likeCount: 4545041,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "cristiano_ronaldo",
        comment: "My brother! 🍻",
      },
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "virat_kohli",
        comment: "GOAT! ♥",
      },
    ],
    username: "lionel_messi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "Character & Conviction. 💪",
    image: require("../../assets/images/virat_kohli_2.jpg").default,
    likes: {
      likeCount: 2847049,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "cristiano_ronaldo",
        comment: "Indeed! 😉",
      },
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "lionel_messi",
        comment: "Very inspiring, brother! 🤩",
      },
    ],
    username: "virat_kohli",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "Never give up. Today is hard and tomorrow will be worse. But the day after tomorrow will be sunshine.",
    image: "",
    likes: {
      likeCount: 3847049,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "cristiano_ronaldo",
        comment: "Indeed! 😉",
      },
      {
        _id: uuid(),
        createdAt: formatDate(),
        username: "lionel_messi",
        comment: "Very inspiring, brother! 🤩",
      },
    ],
    username: "virat_kohli",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "",
    image: require("../../assets/images/mithali_raj_2.jpg").default,
    likes: {
      likeCount: 417092,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mithali_raj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "Cricket is not gender biased. It isn't that men's cricket is different and women's a different one.",
    image: "",
    likes: {
      likeCount: 317092,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mithali_raj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "",
    image: require("../../assets/images/oprah_winfrey_2.jpg").default,
    likes: {
      likeCount: 2100444,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "oprah_winfrey",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    image: "",
    likes: {
      likeCount: 3100444,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "oprah_winfrey",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "",
    image: require("../../assets/images/indra_nooyi_2.jpg").default,
    likes: {
      likeCount: 1113954,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "indra_nooyi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    text: "PepsiCo did not have a woman in the senior ranks, nor a foreign-born person who was willing to think differently.",
    image: "",
    likes: {
      likeCount: 2113954,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "indra_nooyi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
