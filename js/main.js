
"use strict";
$(function () {
  // ハンバーガーmenu
  const hamburger = $(".hamburger");
  const nav = $(".nav");

  hamburger.click(function () {
    $(this).find(".hamburger-bar").toggleClass("is_active");
    nav.toggleClass("is_active");

  })
  // InView
  // BBCが選ばれる理由(スライド左)
  // 要素が表示領域に入った時にクラスを要素に追加する
  // inviewイベントが発生したときに関数を実行
  // inviewイベントは、要素がビュー(表示領域)に入った時にトリガーされる
  $('.inview-slide-left').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView)
      // 要素が表示されたらslide-leftクラスを追加
      // stop()はアニメーションの競合や意図しない動作を防ぐ為
      $(this).stop().addClass('slide-left');
  });

  // スライド右
    $('.inview-slide-right').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView)
      // 要素が表示されたらslide-leftクラスを追加
      // stop()はアニメーションの競合や意図しない動作を防ぐ為
      $(this).stop().addClass('slide-right');
  });
  
})