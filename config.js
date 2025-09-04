// Configuration file for environment variables
window.env = {
    WEB_LOGO: '$WEB_LOGO',
    WEB_PROFILE_PHOTO: '$WEB_PROFILE_PHOTO'
};

// Function to load images from config
function loadConfigImages() {
    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        favicon.href = window.env.WEB_LOGO;
    }
    
    // Update profile photo in hero section
    const profileImg = document.querySelector('.image-placeholder img');
    if (profileImg) {
        profileImg.src = window.env.WEB_PROFILE_PHOTO;
        profileImg.alt = 'Profile Photo';
    }
}

// Load images when DOM is ready
document.addEventListener('DOMContentLoaded', loadConfigImages);
