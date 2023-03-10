import axios from 'axios';

const endpoint = 'http://api.thomasmeta.chat:5001/generate-response';

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
