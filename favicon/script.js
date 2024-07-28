const usesDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false;

var link = document.createElement('link');
link.href = `favicon/favicon_light.png`;
link.rel = "icon"
link.type = "image/x-icon"
link.id = "favicon"
document.head.appendChild(link);

function switchIcon(usesDarkMode) {
    if (usesDarkMode) { 
		link.href = 'favicon/favicon_dark.png';
    } else {
		link.href = 'favicon/favicon_light.png';
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener( "change", (e) => switchIcon(e.matches));
switchIcon(usesDarkMode);

// testing