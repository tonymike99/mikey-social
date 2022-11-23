import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    username: "guest_user",
    password: "IcedLatte@2022",
    displayPicture: "https://i.pravatar.cc/500?img=12",
    coverPicture:
      "https://images.pexels.com/photos/2821220/pexels-photo-2821220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isVerified: false,
    bio: "Guest account.",
    website: "https://www.guest.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "cristiano_ronaldo",
    password: "IcedLatte@2022",
    displayPicture: require("../../assets/images/cristiano_ronaldo.png")
      .default,
    coverPicture: "https://wallpapercave.com/dwp2x/wp10430101.png",
    isVerified: true,
    bio: "Official Twitter of Cristiano Ronaldo. Footballer. Portugal national team captain. Manchester United.",
    website: "https://www.cristianoronaldo.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Lionel",
    lastName: "Messi",
    username: "lionel_messi",
    password: "IcedLatte@2022",
    displayPicture: require("../../assets/images/lionel_messi.png").default,
    coverPicture: "https://wallpapercave.com/dwp2x/wp10807835.jpg",
    isVerified: true,
    bio: "Official Twitter of Lionel Messi. Footballer. Argentina national team captain. Paris Saint-Germain.",
    website: "https://www.messi.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kohli",
    username: "virat_kohli",
    password: "IcedLatte@2022",
    displayPicture: require("../../assets/images/virat_kohli.png").default,
    coverPicture: "https://wallpapercave.com/dwp2x/wp10525479.jpg",
    isVerified: true,
    bio: "Official Twitter of Virat Kohli. Indian cricketer. Royal Challengers Bangalore.",
    website: "https://www.viratkohli.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mithali",
    lastName: "Raj",
    username: "mithali_raj",
    password: "IcedLatte@2022",
    displayPicture: require("../../assets/images/mithali_raj.png").default,
    coverPicture: "https://wallpapercave.com/dwp2x/wp4509370.jpg",
    isVerified: true,
    bio: "Official Twitter of Mithali Raj. Former Indian cricketer.",
    website: "https://www.mithaliraj.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Oprah",
    lastName: "Winfrey",
    username: "oprah_winfrey",
    password: "IcedLatte@2022",
    displayPicture: require("../../assets/images/oprah_winfrey.png").default,
    coverPicture: "https://wallpapercave.com/dwp2x/wp2363739.jpg",
    isVerified: true,
    bio: "Official Twitter of Oprah Winfrey. American talk show host, television producer, actress, author, and philanthropist.",
    website: "https://www.oprahwinfrey.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Indra",
    lastName: "Nooyi",
    username: "indra_nooyi",
    password: "IcedLatte@2022",
    displayPicture: require("../../assets/images/indra_nooyi.png").default,
    coverPicture: "https://wallpapercave.com/dwp2x/wp10992396.png",
    isVerified: true,
    bio: "Official Twitter of Indra Nooyi. Former CEO of PepsiCo. Author of 'My Life in Full'",
    website: "https://www.indranooyi.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
