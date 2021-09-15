import hollerAppBitJsSdk from '@emogi/holler-app-bit-js-sdk';

const themes = {
  light: 'theme-light',
  dark: 'theme-dark',
};

/**
 * Takes in a string and confirms it is in the theme object
 * @param {*} theme
 * @returns
 */
const validateTheme = (theme) => {
  return theme in themes;
};

/**
 * Takes in a string and returns the theme css class or undefined
 * @param {*} theme
 * @returns
 */
const getThemeClass = (theme) => {
  return themes[theme];
};

/**
 * Validates a theme (string) and updates the body with a valid theme class
 * @param {*} theme
 * @returns
 */
const setTheme = (theme) => {
  theme = theme.toLowerCase();

  if (validateTheme(theme)) {
    hollerAppBitJsSdk.config.theme = theme;
    let themeClass = getThemeClass(theme);
    const el = document.body;
    // remove all theme classes
    for (const t in themes) {
      el.classList.remove(themes[t]);
    }
    // add new theme class
    el.classList.add(themeClass);
  }
};

/**
 * Used to validate and return a valid theme string for the
 * Holler App Bit JS Config
 * @param {*} theme
 * @returns
 */
const getTheme = (theme) => {
  if (validateTheme(theme)) {
    return theme;
  } else {
    return 'light';
  }
};

export default {
  setTheme,
  getTheme,
};
