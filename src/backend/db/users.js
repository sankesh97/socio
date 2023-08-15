import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '2f1be5f0-8e76-4eaa-9243-9f84d5e207de',
    firstName: 'Sankesh',
    lastName: 'Jain',
    userName: 'chicku97',
    email: 'a@a.com',
    password: '55172175',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioURL: 'sankeshjain.in',
    Avatar: 'One',
    bio: `Freelance Web Dev | WordPress | Shopify | AWS Certified Developer Associate | Neogcamp'23`,
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: 'd9fda578-56e4-4de2-b422-2c50e730f58a',
    firstName: 'Alice',
    lastName: 'Smith',
    userName: 'alicSmith',
    email: 'alice.smith@example.com',
    password: 'alice123',
    createdAt: '2023-06-17T11:15:20Z',
    updatedAt: '2023-06-17T16:30:45Z',
    portfolioURL: 'alicesmithportfolio.com',
    Avatar: 'Two',
    bio: 'Web Developer | Frontend Enthusiast | UI/UX Designer',
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: '95e8e615-7f4e-491e-97da-5b17b2767814',
    firstName: 'David',
    lastName: 'Johnson',
    userName: 'J.david',
    email: 'david.johnson@example.com',
    password: 'david456',
    createdAt: '2023-06-17T09:40:10Z',
    updatedAt: '2023-06-17T15:20:30Z',
    portfolioURL: 'davidjohnsonportfolio.com',
    Avatar: 'Three',
    bio: 'Full Stack Developer | Python | Django | React | AWS Certified',
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: '7b6ebf27-982c-4e8f-af6b-3a948c015f0d',
    firstName: 'Emma',
    lastName: 'Brown',
    userName: 'Brownie.Emma',
    email: 'emma.brown@example.com',
    password: 'emma789',
    createdAt: '2023-06-17T12:05:35Z',
    updatedAt: '2023-06-17T17:45:25Z',
    portfolioURL: 'emmabrownportfolio.com',
    Avatar: 'Four',
    bio: 'Software Engineer | Java | Spring Boot | Angular | CI/CD',
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: '2d79a60f-b063-4a70-84a9-7921fe447724',
    firstName: 'Daniel',
    lastName: 'Miller',
    userName: 'DannyMiller',
    email: 'daniel.miller@example.com',
    password: 'daniel987',
    createdAt: '2023-06-17T08:50:15Z',
    updatedAt: '2023-06-17T14:10:50Z',
    portfolioURL: 'danielmillerportfolio.com',
    Avatar: 'Five',
    bio: 'Mobile App Developer | Flutter | React Native | Firebase',
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: '8ce6034a-84d0-41ee-a1a0-2121675baf0a',
    firstName: 'Olivia',
    lastName: 'Taylor',
    userName: 'OliTaylor',
    email: 'olivia.taylor@example.com',
    password: 'olivia123',
    createdAt: '2023-06-17T10:40:25Z',
    updatedAt: '2023-06-17T16:55:40Z',
    portfolioURL: 'oliviataylorportfolio.com',
    Avatar: 'Six',
    bio: 'UI Designer | Sketch | Figma | Adobe Creative Suite',
    followers: [],
    following: [],
    bookmarks: [],
  },
];
