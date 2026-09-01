import ImageKit from "@imagekit/nodejs";
import client from "../config/imagekit.js";



export default async function StorageService(files) {
    const images = await Promise.all(files.map(async (file) => {
        return await uploadFile({
            buffer: file.buffer,
            fileName: file.originalname,
        });
    }))

    return images;


}

 async function uploadFile({ buffer, fileName, folder = "ecommerce", }) {
    const response = await client.files.upload({
        file: await ImageKit.toFile(buffer),
        fileName,
        folder,
    });

    return {
        url:response.url,
    };
}