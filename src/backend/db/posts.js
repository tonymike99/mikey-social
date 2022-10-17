import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "I'm living a dream I never want to wake up from.”  “I'm living a dream I never want to wake up from.",
    likes: {
      likeCount: 4545093,
      likedBy: [],
      dislikedBy: [],
    },
    username: "cristiano_ronaldo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I have fun like a child in the street. When the day comes when I'm not enjoying it, I will leave football.",
    likes: {
      likeCount: 3545041,
      likedBy: [],
      dislikedBy: [],
    },
    username: "lionel_messi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Never give up. Today is hard tomorrow will be worse. But the day after tomorrow will be sunshine.",
    likes: {
      likeCount: 2847049,
      likedBy: [],
      dislikedBy: [],
    },
    username: "virat_kohli",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Cricket is not gender biased. It isn't that men's cricket is different and women's a different one.",
    likes: {
      likeCount: 317092,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mithali_raj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The more you praise and celebrate your life, the more there is in life to celebrate.",
    likes: {
      likeCount: 2100444,
      likedBy: [],
      dislikedBy: [],
    },
    username: "oprah_winfrey",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The more you praise and celebrate your life, the more there is in life to celebrate.",
    likes: {
      likeCount: 1113954,
      likedBy: [],
      dislikedBy: [],
    },
    username: "indra_nooyi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
