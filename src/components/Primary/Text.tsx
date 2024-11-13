import { cva } from "class-variance-authority";
import React from "react";
import { Text as RNText } from "react-native";
import { layout } from "@src/utils";

const textStyles = cva([], {
  variants: {
    color: {
      primary: "text-blue-500",
      secondary: "text-gray-500",
      danger: "text-red-500",
    },
    size: {
      small: { fontSize: layout.fontPixel(12) },
      medium: { fontSize: layout.fontPixel(14) },
      large: { fontSize: layout.fontPixel(16) },
      xlarge: { fontSize: layout.fontPixel(20) },
      xxlarge: { fontSize: layout.fontPixel(24) },
      xxxlarge: { fontSize: layout.fontPixel(30) },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

type TextProps = {
  color?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
  text: string;
  className?: string;
};

export const Text = ({ color, size, text, className }: TextProps) => {
  const textClass = textStyles({ color, size });

  return <RNText className={`${className} ${textClass}`}>{text}</RNText>;
};
