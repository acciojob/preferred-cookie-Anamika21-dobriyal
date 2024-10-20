//your JS code here. If required.
// Helper function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Helper function to get a cookie by name
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Apply saved preferences (if they exist)
function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// Save preferences on form submit
document.getElementById("preferencesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Set cookies for font size and color, expire in 7 days
  setCookie("fontsize", fontSize, 7);
  setCookie("fontcolor", fontColor, 7);

  // Apply the preferences immediately
  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;
});

// Apply preferences when the page loads
// window.onload = function () {
//   applyPreferences();
// };

// Ensure the form exists before adding event listeners
window.onload = function () {
  const preferencesForm = document.getElementById("preferencesForm");
  if (preferencesForm) {
    preferencesForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fontSize = document.getElementById("fontsize").value;
      const fontColor = document.getElementById("fontcolor").value;

      // Set cookies for font size and color, expire in 7 days
      setCookie("fontsize", fontSize, 7);
      setCookie("fontcolor", fontColor, 7);

      // Apply the preferences immediately
      document.body.style.fontSize = fontSize + "px";
      document.body.style.color = fontColor;
    });

    applyPreferences();
  } else {
    console.error("Form not found");
  }
};

// Other functions like setCookie, getCookie, and applyPreferences remain the same

