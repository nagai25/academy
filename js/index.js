"use strict";

/*(-----------------------------------これより下を消す---------------------------------)*/

/*
  スムーススクロール(ページトップへ)
*/

// TOPへボタンを変数へ格納
const pageTopBtn = document.getElementById("page-top-btn");

//スクロールした際の動きを関数でまとめる
window.addEventListener("scroll", () => {
  //ページトップからの高さを取得
  const scrollY = window.scrollY;

  if (scrollY >= 200) {
    // ページトップから200px以上になった場合
    pageTopBtn?.classList.add("UpMove");
  } else {
    // ページトップから200px以下になった場合
    pageTopBtn?.classList.remove("UpMove");
  }
});

//クリックイベントを追加
pageTopBtn?.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

/*
  フォームのバリデーション
*/

// フォーム要素を取得
const formEl = document.getElementById("contact-form");

// 送信ボタンが押された時にvalidationForm()を呼び出す
formEl?.addEventListener("submit", (e) => {
  e.preventDefault();
  validationForm();
});

function validationForm() {
  const name = document.getElementById("name");
  const mail = document.getElementById("mail");
  const tel = document.getElementById("tel");
  const confirm = document.getElementById("confirm");

  const telCheck = /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/ || tel.length > 11;
  const mailCheck =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

  const nameError = document.getElementById("name_error");
  const mailError = document.getElementById("mail_error");
  const telError = document.getElementById("tel_error");
  const confirmError = document.getElementById("confirm_error");

  let checkFlug = 1;

  nameError.textContent = "";
  mailError.textContent = "";
  telError.textContent = "";
  confirmError.textContent = "";

  if (name.value === "") {
    nameError.textContent = "お名前は必須項目です。";
    checkFlug = 0;
  }
  if (mail.value === "") {
    mailError.textContent = "メールアドレスは必須項目です。";
    checkFlug = 0;
  } else if (!mailCheck.test(mail.value)) {
    mailError.textContent = "正しいメールアドレスを入力してください。";
    checkFlug = 0;
  }
  if (!tel.value == "" && !telCheck.test(tel.value)) {
    telError.textContent = "正しい番号を入力して下さい。";
    checkFlug = 0;
  }
  if (!confirm.checked) {
    confirmError.textContent = "規約の同意は必須です。";
    checkFlug = 0;
  }

  if (checkFlug) {
    const result = window.confirm("この内容で送信しますか？");
    if (result) {
      alert("送信されました。");
    }
  }
}
