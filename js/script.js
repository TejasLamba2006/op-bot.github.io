    let e = Array.prototype.slice.call(document.getElementsByClassName("show-mobile"));
    e.forEach(a => {
      if (!window.mobilecheck()) a.style.display = "none";
    })

    e = Array.prototype.slice.call(document.getElementsByClassName("hide-mobile"));
    e.forEach(a => {
      if (window.mobilecheck()) a.style.display = "none";
    })

    e = Array.prototype.slice.call(document.getElementsByClassName("nav-menu-badge"));
    e.forEach(a => {
      if (window.mobilecheck()) a.style.marginBottom = "7px";
    })

    e = Array.prototype.slice.call(document.getElementsByClassName("nav-menu-icon"));
    e.forEach(a => {
      if (window.mobilecheck()) a.style.paddingBottom = "4px";
    })
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // if you want the widget to be on the right then `right: '32px' and left to unset
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.5s' the time to fade in and out 
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // set to true if you want to load the site in the mode the user left it in
  label: '🌓', // the emoji you want for toggling light and dark mode
  autoMatchOsTheme: true // if you have enabled dark mode it would open darkmode
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
