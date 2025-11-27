import { SOUNDS } from '../constants/urls';

/**
 * Play audio file
 * @param {string} audioUrl - URL of the audio file
 */
export const playSound = (audioUrl) => {
  try {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.warn('Audio playback failed:', error);
    });
  } catch (error) {
    console.warn('Audio creation failed:', error);
  }
};

/**
 * Play correct answer sound
 */
export const playCorrectSound = () => {
  playSound(SOUNDS.CORRECT);
};

/**
 * Play wrong answer sound
 */
export const playWrongSound = () => {
  playSound(SOUNDS.WRONG);
};
