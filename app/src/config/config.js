/*
 * Heads up!
 * Only change and commit this file if really necessary. If you need to change values for your local environment
 * (e.g. API endpoints), please change them in the "config.local.js". The local configuration will overwrite the de-
 * fault values here.
 */
const DEFAULT_CONFIG = {
  DEFAULT_LOCALE: "en"
};

const CONFIG_LOCAL = {};
const CONFIG = Object.assign({}, DEFAULT_CONFIG, CONFIG_LOCAL);

export default CONFIG;
