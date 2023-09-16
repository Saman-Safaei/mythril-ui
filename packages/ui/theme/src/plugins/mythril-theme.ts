import type { Plugin } from "vue";
import type { MythrilConfiguration } from "../ts/theme-type";
import buttonStyles from "../styles/button";

const MythrilPlugin: Plugin<MythrilConfiguration> = {
  install(app, config: MythrilConfiguration = {}) {
    app.provide<MythrilConfiguration>("mythril-theme", {
      button: buttonStyles(config.button)
    });
  }
};

export default MythrilPlugin;