export class UI {
  constructor() {
    this.soundCardsContainer = null;
    this.masterVolumeSlider = null;
    this.masterVolumeValue = null;
    this.playPauseButton = null;
    this.resetButton = null;
    this.modal = null;
    this.customPresetsContainer = null;
    this.timerDisplay = null;
    this.timerSelect = null;
    this.themeToggle = null;
  }

  init() {
    this.soundCardsContainer = document.querySelector(".grid");
    this.masterVolumeSlider = document.getElementById("masterVolume");
    this.masterVolumeValue = document.getElementById("masterVolumeValue");
    this.playPauseButton = document.getElementById("playPauseAll");
    this.resetButton = document.getElementById("resetAll");
    this.modal = document.getElementById("savePresetModal");
    this.customPresetsContainer = document.getElementById("customPresets");
    this.timerDisplay = document.getElementById("timerDisplay");
    this.timerSelect = document.getElementById("timerSelect");
    this.themeToggle = document.getElementById("themeToggle");
  }

  // Create sound card HTML
  createSoundCard(sound) {
    const card = document.createElement("div");
    card.className =
      "sound-card bg-white/10 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden transition-all duration-300";
    card.dataset.sound = sound.id;

    card.innerHTML = `
      <div class="flex flex-col h-full">
        <!-- Sound Icon and Name -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div class="sound-icon-wrapper w-12 h-12 rounded-full bg-gradient-to-br ${sound.color} flex items-center justify-center">
              <i class="fas ${sound.icon} text-white text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-lg">${sound.name}</h3>
              <p class="text-xs opacity-70">${sound.description}</p>
            </div>
          </div>
          <button type="button" class="play-btn w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center" data-sound="${sound.id}">
            <i class="fas fa-play text-sm"></i>
          </button>
        </div>

        <!-- Volume Control -->
        <div class="flex-1 flex flex-col justify-center">
          <div class="flex items-center space-x-3">
            <i class="fas fa-volume-low opacity-50"></i>
            <input type="range" class="volume-slider flex-1" min="0" max="100" value="0" data-sound="${sound.id}">
            <span class="volume-value text-sm w-8 text-right">0</span>
          </div>

          <!-- Volume Bar Visualization -->
          <div class="volume-bar mt-3">
            <div class="volume-bar-fill" style="width: 0%"></div>
          </div>
        </div>
      </div>
    `;

    return card;
  }

  // Render all sound cards
  renderSoundCards(sounds) {
    this.soundCardsContainer.innerHTML = "";
    sounds.forEach((sound) => {
      const card = this.createSoundCard(sound);
      this.soundCardsContainer.appendChild(card);
    });
  }

  // Update play/pause button for individual sound
  updateSoundPlayButton(soundId, isPlaying) {
    const card = document.querySelector(`[data-sound="${soundId}"]`);

    if (card) {
      const playBtn = card.querySelector(".play-btn");
      const icon = playBtn.querySelector("i");

      if (isPlaying) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        card.classList.add("playing");
      } else {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        card.classList.remove("playing");
      }
    }
  }

  // Update volume display for a sound
  updateVolumeDisplay(soundId, volume) {
    const card = document.querySelector(`[data-sound="${soundId}"]`);

    if (card) {
      // Update number display
      const volumeValue = card.querySelector(".volume-value");
      if (volumeValue) {
        volumeValue.textContent = volume;
      }

      // Update volume bar visuals
      const volumeBarFill = card.querySelector(".volume-bar-fill");
      if (volumeBarFill) {
        volumeBarFill.style.width = `${volume}%`;
      }

      // Update slider position
      const slider = card.querySelector(".volume-slider");
      if (slider) {
        slider.value = volume;
      }
    }
  }
}
