"use strict";
// 要素の取得
const bigContent = document.querySelectorAll(".big-content");

bigContent.forEach(function (e, i) {
  console.log(e, i);
  const btn = e.querySelector(".push");
  const content = e.querySelector(".out-content");
  //   ボタンクリックでイベント処理
  //   textContent,innerText,innerHtml
  // containsは指定のクラスを含むかどうか判断する
  btn.addEventListener("click", () => {
    if (!content.classList.contains("show")) {
      content.style.height = content.scrollHeight + "px";
      content.classList.add("show");
    } else {
      content.style.height = "0px";
      content.classList.remove("show");
    }
  });
});

const moreBtn = document.getElementById("more-btn");
const bottomImg = document.querySelector(".bottom-img");
const favOutContent = bigContent[2].querySelector(".out-content");
//   ボタンクリックでイベント処理
//   textContent,innerText,innerHtml
// containsは指定のクラスを含むかどうか判断する
// showのクラスの付け替え↓
// bottomImg.classList.toggle("show");
moreBtn.addEventListener("click", () => {
  // console.log(favOutContent.scrollHeight, bottomImg.scrollHeight);
  const beforeHeight = bottomImg.scrollHeight;
  bottomImg.classList.toggle("show");
  // console.log(favOutContent.scrollHeight, bottomImg.scrollHeight);
  const afterHeight = bottomImg.scrollHeight;
  console.log(beforeHeight, afterHeight);
  if (bottomImg.classList.contains("show")) {
    bottomImg.style.height = afterHeight + "px";
    favOutContent.style.height = favOutContent.scrollHeight + "px";
  } else {
    favOutContent.style.height =
      favOutContent.scrollHeight - beforeHeight + "px";
    bottomImg.style.height = "0px";
    console.log(favOutContent.scrollHeight, bottomImg.scrollHeight);
  }
  console.log(bottomImg);
});
