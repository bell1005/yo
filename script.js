// 「はい」を押したときの処理
function approve() {
  showResult([
    "🔥 いつも頑張ってて偉い！🔥",
    "✨ かっこいい！✨",
    "💪 いつも助かってるよ！💪"
  ]);
  launchFirework();
  yayBoom();
}

// 「いいえ」を押したときの処理
function deny() {
  showResult([
    "ﾆｨｨｲｲｲｲｲｲｲｲｲｲｲ!! 🤯",
    "ｸﾞｧﾝｸﾞｧﾝｸﾞｧﾝ!! 💥",
    "ﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞ!! 😱"
  ]);
  launchFirework();
  yayBoom();
}

// 結果を表示する関数
function showResult(messages) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
  resultDiv.style.display = 'block';
  document.querySelector('.container').style.height = 'auto';
}

// 花火を発動
function launchFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  document.body.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 2000);
}

// やったぁ‼️‼️を爆速スクロール
function yayBoom() {
  const yayText = document.getElementById('yay-text');
  yayText.style.display