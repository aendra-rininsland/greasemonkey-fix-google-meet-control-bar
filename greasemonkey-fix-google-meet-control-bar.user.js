// ==UserScript==
// @name         Fix Google Meet control bar in place
// @namespace    https://github.com/aendrew/greasemonkey-fix-google-meet-control-bar
// @version      0.1
// @description  Prevents the Google Meet controls bar from hiding for no damn good reason
// @author       Ændrew Rininsland <aendrew@aendrew.com>
// @match        https://meet.google.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    try {
      [...document.querySelectorAll('div')].forEach(div => {
         const computed = window.getComputedStyle(div);
         if ((Number(computed.opacity) < 1 && computed.transform === 'translateY(100px)') || (Number(computed.opacity) === 1 && computed.transform === 'translateY(0)')) {
           div.style.transform = 'translateY(0) !important';
           div.style.opacity = '1 !important';
         }
      });
    } catch (e) {}
})();
