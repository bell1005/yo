// 「はい」を押したときの処理
function approve() {
  showResult([
    "✨🎉 すごい！かっこいい！ 🎉✨",
    "🌟 めっちゃ偉い！！ 🌟",
    "💖 最高すぎる！！！ 💖"
  ]);
  launchFireworks();
  spawnYabai(); // ヤバい‼️を追加
}

// 「いいえ」を押したときの処理
function deny() {
  showResult([
    "💥💀 ヤバすぎぃ！！！ 💀💥",
    "🔥🔥 もう無理ィ！！ 🔥🔥",
    "💣💣💣 ドカーン 💣💣💣"
  ]);
  explodeScreen();
  spawnYabai(); // ヤバい‼️を追加
}

// 結果を表示する関数
function showResult(messages) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
  resultDiv.style.display = 'block';
}

// 「はい」押したときの花火エフェクト
function launchFireworks() {
  document.body.style.background = "radial-gradient(circle, #ff0, #f00, #00f)";
}

// 「いいえ」押したときの爆発エフェクト
function explodeScreen() {
  document.body.style.animation = "shake 0.5s infinite";
}

// 「ヤバい‼️」をランダムな場所に追加する関数
function spawnYabai() {
  const container = document.getElementById('yabai-container');

  for (let i = 0; i < 10; i++) { // 10個ずつ増やす
    const yabai = document.createElement('div');
    yabai.className = 'yabai-text';
    yabai.textContent = "ヤバい‼️";

    // ランダムな位置
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 2 + 1; // サイズランダム
    const rotation = Math.random() * 360; // 角度ランダム

    yabai.style.left = `${x}px`;
    yabai.style.top = `${y}px`;
    yabai.style.transform = `scale(${size}) rotate(${rotation}deg)`;

    container.appendChild(yabai);

    // 3秒後に削除
    setTimeout(() => {
      yabai.remove();
    }, 3000);
  }
}
