const GROW_SOUND_PATH = 'sound/grow.wav';
const DEATH_SOUND_PATH = 'sound/death.wav';

export function SoundPlayer(document) {
    this.growSound = document.createElement('audio');
    this.growSound.setAttribute('src', GROW_SOUND_PATH);

    this.deathSound = document.createElement('audio');
    this.deathSound.setAttribute('src', DEATH_SOUND_PATH);

    this.playGrowSound = function () {
        this.growSound.play();
    }

    this.playDeathSound = function () {
        this.deathSound.play();
    }
}