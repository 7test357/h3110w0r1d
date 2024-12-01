async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userInput }],
        }),
    });

    const data = await response.json();
    responseDiv.innerHTML = data.choices[0].message.content;
}
