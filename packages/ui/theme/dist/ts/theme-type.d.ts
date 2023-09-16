import type { CSSObject } from "@emotion/css";
export type ThemeFunction<T extends keyof MythrilConfiguration> = (userTheme: MythrilConfiguration[T]) => MythrilConfiguration[T];
export type MythrilConfiguration = Partial<{
    button: Partial<{
        base: CSSObject;
        variant: Partial<{
            solid: CSSObject;
            outlined: CSSObject;
            text: CSSObject;
            ghost: CSSObject;
        }>;
    }>;
}>;
