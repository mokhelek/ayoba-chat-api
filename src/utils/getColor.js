import { Translate } from "@google-cloud/translate/build/src/v2";

const credentials = {
    type: "service_account",
    project_id: "orbital-expanse-430709-u9",
    private_key_id: "107d5629b5759b20d4e46e0a2200c5443699a9b5",
    private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDULK+91a5MoG8O\nyDQ8mZzxr3GK5YUlHrXL0hSaFX84ZiyEef1aZeQNurpG/X8yI1ikdxM4l3NigFWR\nQ0RDOL4btobkJCNy6uFbYxk3I/0vjaaPW/JQ8GbgpVI/QDRh7AqO/BIRn0JWecqu\nTGvDFJ81Vqf3lmVJf5N0LwdS9r8qCUY44M1nrkpd7nYvverAnxLOWS24gSUkPSgL\ngOnHqSAf9/Gx4hDOikeHD14czdy1c5fpvzHEWsYJmVheqbBoLJVSBE9ujMPL2SGg\niNuoxO7WO4ZSNIeAo9uIFWZv10HGUwvNWBVx7u8+p+1zdE+sG0zRYqzBN/D/v8gB\nHbEco4cJAgMBAAECggEAEpTdST9K9fwA7eb7qCj91S67v2HNcMxJOJHr6vih/SL5\nmBqE5SNSPx+Qy8HMn2v4CeNBxC2DVeeOVtvwwQBZqdyo4JcHobtPRC0gGrOkq0L5\nCMoRJSSApgDkfJSXYdIFtLL/tBph+WfOJ8iakWmfbdDqgeTidvbcx4qM1ie04y3m\n5NmzoiY0iwQ9cbpWz4tCWv0F/1MVhjT605fCJxHsgCKkKCwPuECkt232sgi/0fpo\n6OuM4XZUoK+co355XAPUwTwvr99aLb1STwSnvGvPONn2xoEE0fhQvh3jluKemfVy\n8M2DRwDYXEkpnGnNAMKZvjXZjgfIH2Ills/jeedcuQKBgQDyzv12Ap3cMwCEu2Je\n9sVDbzcY4h9BmqvATZeYGO3FMolB+vA9IwxGvTBiUiH2HPM1d1et2h/FT9aeoalt\nlptXfMPQZXBzEYdc7qNCDWmHASGV9mDIdZpPRJpvKZzWvu47vstn6OOCG4d8Gf+H\nmCTk11HAjmv5VFl5JqxS+Rz3fQKBgQDfs6KZv6kTgHc7yYPGwlUCL5du2nt0BDRL\namNdYFDoElXOnFQ/o+S5wTXA5K135xq3ciN1r5zKk50+j9XT3mHcZPdOTdHv707Y\nPP5X7N4KvQeUO3RTWWYoLVQ4BqMUfsWg4LMT4Gq0bfhIPoUQwZNoxAwpHAMF9R3f\nqMzs2x6bfQKBgCoJL9RIa6/9nG9eSY+LRWeBT5adPzAKaQWn6UDJwBBNyXmEyiar\ndKqigkfjVEHZjTmKacGNa8arJcrczgpM8qPY08W2ahthw3+RSO5ciBJ5XakquGK8\nCXUDuYDZQW/kKjZpt6lLpmeWAIS5s4V0D58Wr+6YOZU2xy60RU0wF5W5AoGBAKPU\nzqflazFiK3C48+6UEmgIbNJ95l4gWiBFaUJQsNBV5Uvsx/LX2EKGkxSTJcwjkDh7\nuiaNl7nxA/92nfaN7oPX2hsZ+T/MtqS9ftTsH+4jZLKWHGqSlbOlBwIFMlhnQ9u/\n1Mcg22ULCQP37cJI0umucu2Em144l0lfOb3Z+H+NAoGAJuvzA4j7kp9BoPEONaD0\nCaktzg6WVOx7skkqZ9Tf3gOchCweDEjGCIwyaFXqO3RZypkJKbKkcWHzcykyhQEB\nsHbvJrYqbkaIgKVty6ZdS87aX+R212Dk/PsAd0EGY/jXWxXQaUX+51NVqxq5LnFG\n1Wj6euF9SKfQaGI+HDoYXwc=\n-----END PRIVATE KEY-----\n",
    client_email:
        "ayoba-chat-api@orbital-expanse-430709-u9.iam.gserviceaccount.com",
    client_id: "104096251420277517047",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/ayoba-chat-api%40orbital-expanse-430709-u9.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
};
const translate = new Translate({
    credentials: credentials,
    projectId: credentials.private_key_id,
});


export const getBarColor = async (val) => {
    const response = await translate.translate("message", "xh");
    return response;
};


// export const TranslateMsgAPI = async (message, targetLanguage) => {
//     try {
//         // const response = await translate.translate(message, targetLanguage);
//         return message;
//     } catch (error) {
//         console.error("Error translating message:", error);
//         throw error;
//     }
// };