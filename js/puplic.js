function Rem() {
   var docEl = document.documentElement,
   oSize = docEl.clientWidth / 3.6;
   if (oSize > 200) {
   oSize = 200; // 限制rem值 640 / 6.4 =100
}
   docEl.style.fontSize = oSize + 'px';
}
window.addEventListener('resize', Rem, false);
Rem();