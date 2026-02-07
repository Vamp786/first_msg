// JavaScript for interactions and scene transitions
document.addEventListener('DOMContentLoaded', () => {
    const scene1 = document.getElementById('scene-1');
    const scene2 = document.getElementById('scene-2');
    const scene3 = document.getElementById('scene-3');
    const mailbox = document.getElementById('mailbox');
    const letter = document.getElementById('letter');
    const heart = document.getElementById('heart');

    // Scene 1: Click mailbox to open and transition to Scene 2
    mailbox.addEventListener('click', () => {
        mailbox.classList.add('open'); // Animate door open
        setTimeout(() => {
            scene1.classList.remove('active');
            scene2.classList.add('active');
            letter.classList.add('open'); // Animate letter slide/open
        }, 500); // Delay for smooth transition
    });

    // Scene 2: Click heart to transition to Scene 3
    heart.addEventListener('click', () => {
        scene2.classList.remove('active');
        scene3.classList.add('active');
    });

    // Optional: Add heartbeat micro-interaction on heart hover
    heart.addEventListener('mouseenter', () => {
        heart.style.animation = 'pulse 0.5s infinite';
    });
    heart.addEventListener('mouseleave', () => {
        heart.style.animation = 'pulse 1.5s infinite';
    });
});