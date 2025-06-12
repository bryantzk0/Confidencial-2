document.addEventListener('DOMContentLoaded', () => {
  const fotos = document.querySelectorAll('.foto');
  const audioPlayer = document.getElementById('audioPlayer');
  const btnLovers = document.getElementById('btnLovers');

  fotos.forEach(foto => {
    foto.addEventListener('click', () => {
      const musica = foto.getAttribute('data-musica');
      if (musica) {
        audioPlayer.src = musica;
        audioPlayer.play();
        btnLovers.innerText = '💖 Tocar Lovers 💖'; // resetar botão
      }
    });
  });

  if (btnLovers) {
    let tocandoLovers = false;

    btnLovers.addEventListener('click', () => {
      if (!tocandoLovers) {
        audioPlayer.src = 'assets/lovers.mp3';
        audioPlayer.play();
        btnLovers.innerText = '🔊 Tocando "Lovers"';
        tocandoLovers = true;
      } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        btnLovers.innerText = '💖 Tocar Lovers 💖';
        tocandoLovers = false;
      }
      audioPlayer.style.display = 'block';
    });
  }
});
