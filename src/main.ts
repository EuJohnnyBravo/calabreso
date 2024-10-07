const button = document.getElementById("playButton");
const audio = document.getElementById("audio") as HTMLAudioElement;

// Array de caminhos de diferentes arquivos de áudio
const audioFiles: string[] = [
  "src/audio1.mp3",
  "src/audio2.mp3",
  "src/audio3.mp3",
  "src/audio4.mp3",
  "src/audio5.mp3",
  "src/audio6.mp3",
];

// Função para sortear um áudio aleatoriamente
function getRandomAudio(): string {
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  return audioFiles[randomIndex];
}

button?.addEventListener("click", () => {
  const randomAudio = getRandomAudio(); // Sorteia um áudio
  audio.src = randomAudio; // Define o src do elemento de áudio
  audio.play(); // Reproduz o áudio sorteado
});
