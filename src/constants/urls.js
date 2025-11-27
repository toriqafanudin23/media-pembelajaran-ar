// URL Constants
export const URLS = {
  ANIM: import.meta.env.VITE_URL_ANIM,
  ICON: import.meta.env.VITE_URL_ICON,
  SOUND: import.meta.env.VITE_URL_SOUND,
};

// Asset paths
export const ICONS = {
  START: `${URLS.ICON}start.png`,
  STOP: `${URLS.ICON}stop.png`,
  NEXT: `${URLS.ICON}next.png`,
  CHECK: `${URLS.ICON}cek.png`,
  BUTTON_AR: `${URLS.ICON}buttonAR.png`,
  BUTTON_3D: `${URLS.ICON}button3D.png`,
};

export const SOUNDS = {
  CORRECT: `${URLS.SOUND}benar.mp3`,
  WRONG: `${URLS.SOUND}touch.mp3`,
};
