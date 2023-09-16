import { inject } from "vue";
import { css, cx } from "@emotion/css";

import type { MythrilConfiguration } from "@mythril-ui/theme";

export function useStyles() {
  const styleConfig = inject<MythrilConfiguration>("mythril-theme", {});
  const baseStyle = css(styleConfig.button!.base);
  const solidStyle = cx(css([styleConfig.button!.variant!.solid]), css({ backgroundColor: "red" }));
  const outlinedStyle = css(styleConfig.button!.variant!.outlined);
  const ghostStyle = css(styleConfig.button!.variant!.ghost);
  const textStyle = css(styleConfig.button!.variant!.text);

  return { baseStyle, solidStyle, outlinedStyle, ghostStyle, textStyle };
}