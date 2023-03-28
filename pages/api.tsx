import axios from 'axios';

const endpoint = 'https://api.berri.ai/query?user_email=thomasmetah@gmail.com&instance_id=410fee9c-bf46-4126-867a-f9407760e18a&model=gpt-3.5-turbo&query=';

interface ResponseData {
  response: string;
}

export async function generateResponse(userInput: string): Promise<string> {
  const query = encodeURIComponent(userInput); // Encode the user input to make it safe for use in a URL

  try {
    const response = await axios.get<ResponseData>(`${endpoint}&query=${query}`);

    return response.data.response;
  } catch (error) {
    console.error(error);
    return 'An error occurred while generating the response';
  }
}
