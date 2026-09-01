// import ImageKit from "imagekit";
import dotenv from "dotenv"
dotenv.config();

import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
});

export default client;