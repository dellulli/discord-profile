document.getElementById('saveBtn').addEventListener('click', function() {
    // Grab the input values
    const username = document.getElementById('usernameInput').value;
    const aboutMe = document.getElementById('aboutMeInput').value;
    const avatarFile = document.getElementById('avatarInput').files[0];
    const bannerFile = document.getElementById('bannerInput').files[0];
    const status = document.getElementById('statusSelect').value;
    const bgColor = document.getElementById('bgColorInput').value;

    // Update the profile
    document.getElementById('username').textContent = username || 'dellulli';
    document.getElementById('aboutMe').textContent = `About Me: ${aboutMe || ''}`;
    document.getElementById('profile').style.backgroundColor = bgColor || '#000000';

    // Update avatar if provided
    if (avatarFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatar').src = e.target.result;
        };
        reader.readAsDataURL(avatarFile);
    }

    // Update banner if provided
    if (bannerFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('banner').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(bannerFile);
    }

    // Update online/offline status
    const statusIndicator = document.getElementById('statusIndicator');
    statusIndicator.className = 'status ' + status;  // Apply either 'online', 'offline', or 'dnd'

    // Reset after 3 seconds (optional)
    setTimeout(function() {
        document.getElementById('username').textContent = 'dellulli';
        document.getElementById('aboutMe').textContent = 'About Me: ';
        document.getElementById('avatar').src = 'spirit.png';
        document.getElementById('banner').style.backgroundImage = 'none';
        document.getElementById('profile').style.backgroundColor = '#000000';
        statusIndicator.className = 'status offline'; // Reset to offline
    }, 3000);  // 3 seconds
});
