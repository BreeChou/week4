"use strict";

// console.log('Hello!');
// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });
$('.ham-icon').click(function (e) {
  e.preventDefault();
  $('.ham-list').toggleClass('active');
}); //點選.ham-icon會觸發funtion執行e.preventDefault();>>取消預設行為
//使用toggleClass讓.dropdown元素可以增加或取消active
//# sourceMappingURL=all.js.map
