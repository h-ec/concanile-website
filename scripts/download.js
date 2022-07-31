const get = (elementID)=>{return document.getElementById(elementID)};

const windowsBTN = get("windows-download-button");
const macosBTN = get("macos-download-button");
const linuxBTN = get("linux-download-button");

windowsBTN.addEventListener("click", () => {
    window.location = "downloads/concanile-beta_win32-x64.zip";
});

macosBTN.addEventListener("click", () => {
    window.location = "downloads/concanile-beta-darwin-x64.zip";
});

linuxBTN.addEventListener("click", () => {
    window.location = "downloads/concanile-beta_linux-x64.zip";
});