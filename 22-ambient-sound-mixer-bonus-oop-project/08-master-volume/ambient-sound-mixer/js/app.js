import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";
import { UI } from "./ui.js";

class AmbientMixer {
  // Initialize dependencies and default state
  constructor() {
    this.soundManager = new SoundManager();
    this.ui = new UI();
    this.presetManager = null;
    this.timer = null;
    this.currentSoundState = {};
    this.masterVolume = 100;
    this.isInitialized = false;
  }

  init() {
    try {
      // Initialize UI
      this.ui.init();

      // Render sound cards using our sound data
      this.ui.renderSoundCards(sounds);

      this.setupEventListeners();

      // Load all sounds
      this.loadAllSounds();

      this.isInitialized = true;
    } catch (error) {
      console.log("Failed to initialize app: ", error);
    }
  }

  // Setup all event listeners
  setupEventListeners() {
    // Handle all clicks with event delegation
    document.addEventListener("click", async (e) => {
      // Check if play button was clicked
      if (e.target.closest(".play-btn")) {
        const soundId = e.target.closest(".play-btn").dataset.sound;
        await this.toggleSound(soundId);
      }
    });

    // Handle volume slider changes
    document.addEventListener("input", (e) => {
      if (e.target.classList.contains("volume-slider")) {
        const soundId = e.target.dataset.sound;
        const volume = parseInt(e.target.value);
        this.setSoundVolume(soundId, volume);
      }
    });

    // Handle master volume slider
    const masterVolumeSlider = document.getElementById("masterVolume");
    if (masterVolumeSlider) {
      masterVolumeSlider.addEventListener("input", (e) => {
        const volume = parseInt(e.target.value);
        this.setMasterVolume(volume);
      });
    }
  }

  // Load all sound files
  loadAllSounds() {
    sounds.forEach((sound) => {
      const audioUrl = `audio/${sound.file}`;
      const success = this.soundManager.loadSound(sound.id, audioUrl);
      if (!success) {
        console.warn(`Could not load sound: ${sound.name} from ${audioUrl}`);
      }
    });
  }

  // Toggle individual sound
  async toggleSound(soundId) {
    const audio = this.soundManager.audioElements.get(soundId);

    if (!audio) {
      console.error(`Sound ${soundId} not found`);
      return false;
    }

    if (audio.paused) {
      // Get current slider value
      const card = document.querySelector(`[data-sound="${soundId}"]`);
      const slider = card.querySelector(".volume-slider");
      let volume = parseInt(slider.value);

      // If slider is at 0, default to 50%
      if (volume === 0) {
        volume = 50;
        this.ui.updateVolumeDisplay(soundId, volume);
      }

      // Sound is off, turn it on
      this.soundManager.setVolume(soundId, volume);
      await this.soundManager.playSound(soundId);
      this.ui.updateSoundPlayButton(soundId, true);
    } else {
      // Sound is on, shut if off
      this.soundManager.pauseSound(soundId);
      this.ui.updateSoundPlayButton(soundId, false);
    }
  }

  // Set sound volume
  setSoundVolume(soundId, volume) {
    // Calculate effective volume with master volume
    const effectiveVolume = (volume * this.masterVolume) / 100;

    // Update the sound volume with the scaled volume
    const audio = this.soundManager.audioElements.get(soundId);
    if (audio) {
      audio.volume = effectiveVolume / 100;
    }

    // Update visual display
    this.ui.updateVolumeDisplay(soundId, volume);
  }

  // Set master volume
  setMasterVolume(volume) {
    this.masterVolume = volume;

    // Update the display
    const masterVolumeValue = document.getElementById("masterVolumeValue");
    if (masterVolumeValue) {
      masterVolumeValue.textContent = `${volume}%`;
    }

    // Apply master volume to all currently playing sounds
    this.applyMasterVolumeToAll();
  }

  // Apply master volume to all playing sounds
  applyMasterVolumeToAll() {
    for (const [soundId, audio] of this.soundManager.audioElements) {
      if (!audio.paused) {
        const card = document.querySelector(`[data-sound="${soundId}"]`);
        const slider = card?.querySelector(".volume-slider");

        if (slider) {
          const individualVolume = parseInt(slider.value);
          // Calculate effective volume (individual * master / 100)
          const effectiveVolume = (individualVolume * this.masterVolume) / 100;

          // Apply to the actual audio element
          audio.volume = effectiveVolume / 100;
        }
      }
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
