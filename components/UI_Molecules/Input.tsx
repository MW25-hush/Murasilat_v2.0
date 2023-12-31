import React from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

const inputCVA = cva("h-10 pr-8", {
  variants: {
    state: {
      /** In Design System there are 4 States, due the nature of Figma but in implemenation we have 2 */
      /** The Default state is empty cuz we want to override the error state when it is cleared */
      Default:
        "border border-primary-700 rounded-md   focus:border-2 focus:border-primary-900",
      ErrorState: "!border-myAccent-error-300 border-2 ",
    },

    fullWidth: {
      true: "w-full",
    },
  },
});

interface InputProps extends VariantProps<typeof inputCVA> {
  /**
   * Input Label
   */
  label?: string;

  /**
   * Default HTML input types
   */

  inputType: string;

  /**
   * fullwidth option
   */
  fullWidth: boolean;

  /**
   * Language Support
   */
  lang?: "RTL" | "LTR";

  /**
   * name of the input
   */

  name: string;

  /**
   * the handle Change event
   */

  handleChange?: (value: string, name: string) => void;

  /**
   * disabled property
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const InputField = ({
  fullWidth,
  state,
  label,
  inputType,
  name,
  handleChange,
  disabled,
}: InputProps) => {
  return (
    <div dir="auto" className=" space-y-1">
      <label
        className={cx("capitalize block", {
          "text-myAccent-error-500": state === "ErrorState",
        })}
      >
        {label}
      </label>

      <input
        type={inputType}
        className={inputCVA({ state, fullWidth })}
        onChange={(event) => {
          handleChange && handleChange(event.target.value, event.target.name);
        }}
        name={name}
        required
        disabled={disabled}
      />
    </div>
  );
};
