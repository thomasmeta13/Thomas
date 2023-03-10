import axios from 'axios';

const endpoint = 'https://shareddbstorequery-7bea-8hjw.zeet-berri.zeet.app/berri_query?proj_path=indexes/thomasmetah@gmail.com/abf0055f-0db5-4942-bc16-94a7e5e7156a&query=';

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
