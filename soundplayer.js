const GROW_SOUND_PATH = 'sound/grow.wav';
const MOVE_SOUND_PATH = 'sound/move.wav';
const DEATH_SOUND_PATH = 'sound/death.wav';
const GAMEOVER_SOUND_PATH = 'sound/gameover.wav';
const HIGHSCORE_SOUND_PATH = 'sound/highscore.wav';
const BACKGROUND_SOUND_PATH = 'sound/background.wav';

function _resetAudio(audio) {
    audio.currentTime = 0;
}

function _setLoopProperty(audio) {
    audio.addEventListener('ended', () => {
        _resetAudio(audio);
        audio.play();
    });
}

export function SoundPlayer() {
    this.growSound = new Audio(GROW_SOUND_PATH);
    this.moveSound = new Audio(MOVE_SOUND_PATH);
    this.deathSound = new Audio(DEATH_SOUND_PATH);
    this.background = new Audio(BACKGROUND_SOUND_PATH);
    this.gameoverSound = new Audio(GAMEOVER_SOUND_PATH);
    this.highscoreSound = new Audio(HIGHSCORE_SOUND_PATH);

    _setLoopProperty(this.background);

    this.replayBackground = function () {
        _resetAudio(this.background);
        this.background.play();
    }
}
