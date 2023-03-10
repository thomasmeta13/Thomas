import axios from 'axios';

const endpoint = 'https://api.thomasmeta.chat/generate-response';

interface ResponseData {
  response: string;
}

export async function generateResponse(query: string): Promise<string> {
  try {
    const response = await axios.get<ResponseData>(endpoint, {
      params: {
        query: query,
      },
    });

    return response.data.response;
  } catch (error) {
    console.error(error);
    return 'An error occurred while generating the response';
  }
}
