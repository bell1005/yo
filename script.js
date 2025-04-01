// 「はい」ボタン
function approve() {
  showResult(["✨🎉 すごい！かっこいい！ 🎉✨", "🌟 めっちゃ偉い！！ 🌟", "💖 最高すぎる！！！ 💖"]);
  spawnYabai("偉い‼️");
}

// 「いいえ」ボタン
function deny() {
  showResult(["💥💀 ヤバすぎぃ！！！ 💀💥", "🔥🔥 もう無理ィ！！ 🔥🔥", "💣💣💣 ドカーン 💣💣💣"]);
  spawnYabai("ヤバい‼️");
}

// 結果表示
function showResult(messages) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
  resultDiv.style.display = 'block';
}

// ヤバい‼️または偉い‼️を生成
function spawnYabai(text) {
  const container = document.getElementById('yabai-container');
  for (let i = 0; i < 20; i++) {
    const yabai = document.createElement('div');
    yabai.className = 'yabai-text';
    yabai.textContent = text;
    yabai.style.left = `${Math.random() * window.innerWidth}px`;
    yabai.style.top = `${Math.random() * window.innerHeight}px`;
    container.appendChild(yabai);
    setTimeout(() => yabai.remove(), 3000);
  }
}
