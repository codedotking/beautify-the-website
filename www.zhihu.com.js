// ==UserScript==
// @name         知乎 美化
// @namespace    http://tampermonkey.net/
// @version      2024-07-22
// @description  美化知乎
// @author       huala
// @match        https://www.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    "use strict";

    GM_addStyle(`
#root > div > main > div > div.Topstory-container > div.css-1qyytj7,
#root
  > div
  > div:nth-child(2)
  > header
  > div.AppHeader-inner.css-11p8nt5
  > ul
  > li:nth-child(2),
#root
  > div
  > div:nth-child(2)
  > header
  > div.AppHeader-inner.css-11p8nt5
  > ul
  > li:nth-child(3),
#root
  > div
  > main
  > div
  > div
  > div.Question-main
  > div.Question-sideColumn.Question-sideColumn--sticky.css-1qyytj7 {
  display: none !important;
}

#root > div > main > div > div > div.Question-main,
#root > div > main > div > div.Topstory-container {
  justify-content: center !important;
}
#root > div > main > div > div.Topstory-container > div.Topstory-mainColumn,
#root > div > main > div > div > div.Question-main > div.Question-mainColumn{
  width: 75%% !important;
}



    `);
})();
