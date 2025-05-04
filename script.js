document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
    }

    // Social links hover animation
    const socialLinks = document.querySelectorAll('.social a');
    for (const link of socialLinks) {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
            link.style.color = 'var(--orange)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.color = 'var(--white)';
        });
    }
}); 