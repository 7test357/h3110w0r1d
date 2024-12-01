async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatContainer = document.getElementById('chatContainer');

    chatContainer.innerHTML += `<div class="message user">사용자: ${userInput}</div>`;
    
    const apiKey = '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'; // 여기에 API 키를 입력하세요
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
    const botResponse = data.choices[0].message.content;

    // ChatGPT 응답 표시
    chatContainer.innerHTML += `<div class="message bot">ChatGPT: ${botResponse}</div>`;
    
    // 입력창 초기화
    document.getElementById('userInput').value = '';
    
    // 스크롤을 가장 아래로
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
