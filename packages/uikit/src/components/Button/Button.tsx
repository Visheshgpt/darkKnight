import React, { cloneElement, ElementType, isValidElement } from "react";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants } from "./types";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("pancake-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("pancake-button--disabled");
  }

  return (
    <StyledButton
      style={{
        background:
          "linear-gradient(89.51deg, #3D0000 5.77%, #743434 99.57%)padding-box, linear-gradient(90deg, #FEF3AC 4.75%, #B98A2B 43.14%, #FEF3AC 89.95%)border-box",
        border: "2px solid ",
        borderColor: "transparent",
      }}
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            // mr: "0.5rem",
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            // ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default Button;
