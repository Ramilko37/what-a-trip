
/**
 * Models: https://yandex.cloud/ru/docs/yandexgpt/concepts/models#yandexgpt-generation
 * 
 * Roles:
    system - special role used to define the behaviour of the completion model
    assistant - a role used by the model to generate responses
    user - a role used by the user to describe requests to the model

 * @param {{ model: 'yandexgpt-lite/latest' | 'yandexgpt/latest', iamToken: string; folderId: string; role: string; messages: Array<{ role: 'user' | 'assistant', text: string }> }} options 
 * @returns {Promise<{ result: { alternatives: Array<{ message: { role: string; text: string; }, status: string }> } }>}
 */
export const getTextCompletion = async (options: any = {}) => {
    const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Api-Key AQVNwlHFOIT--xAHvA_DSoNYw0ye1-fbkbeAKViC`,
            'x-folder-id': 'aje2a72jh17uvc80ff0f',
            'cors': 'no-cors',
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Credentials': 'true', 
        },
        method: 'POST',
        body: JSON.stringify({
            "modelUri": `gpt://aje2a72jh17uvc80ff0f/yandexgpt-lite`,
            "completionOptions": {
                "stream": false,
                "temperature": 0.2,
                "maxTokens": "8000" // Max value https://yandex.cloud/ru/docs/yandexgpt/concepts/#working-mode
            },
            "messages": [
                {
                    "role": "user",
                    "text": options.messages.text,
                },
                ...options.messages
            ]
        }),
    });
    const result = await response.json();

    if (result.error) {
        throw new Error('getTextCompletion error: ' + result.error);
    }

    return result;
}