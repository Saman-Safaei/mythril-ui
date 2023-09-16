declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    variant: {
        type: import("vue").PropType<"solid" | "outlined" | "text" | "ghost">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: import("vue").PropType<"solid" | "outlined" | "text" | "ghost">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
}>>, {
    variant: "solid" | "outlined" | "text" | "ghost";
    label: string;
}, {}>, {
    start?(_: {}): any;
    end?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
