document.getElementById('headerCta').addEventListener('click', redirectToSignIn);
document.getElementById('herobtn').addEventListener('click', redirectToSignIn);
document.getElementById('lastCta').addEventListener('click', redirectToSignIn);

function redirectToSignIn() {
    window.location.href = './signup.html';
}