export function loadTest() {
  document.getElementById("output").innerHTML = `
    <strong>Test loaded:</strong> GuaganBrowser JS is working.
  `;
}

export function showModules() {
  document.getElementById("output").innerHTML = `
    <strong>Installed Modules:</strong><br>
    • Astrolo.HumanDesign<br>
    • Astrolo.YiJing<br>
    • SynthAiSuite<br>
    <em>(These are recognized but not yet wired in.)</em>
  `;
}

// expose functions to window for inline onclick=""
window.loadTest = loadTest;
window.showModules = showModules;
