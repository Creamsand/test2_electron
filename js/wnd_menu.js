/* ウィンドウメニュー用 */
$('#min-btn').on('click',function() {
    const { remote } = require('electron');
    remote.BrowserWindow.getFocusedWindow().minimize();
})
$('#close-btn').on('click',function() {
    window.close();
})