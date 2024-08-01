
import axios from 'axios';

const API_KEY = "";

export const TranslateMsgAPI = async (message, targetLanguage) => {
    try {
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
            q: message,
            target: targetLanguage
        });
        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error("Error translating message:", error);
        throw error;
    }
};


