import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { cva } from "class-variance-authority";

const buttonStyles = cva("rounded-full p-4", {
  variants: {
    intent: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
    },
    size: {
      small: "py-2 px-3 text-sm",
      medium: "py-3 px-4 text-base",
      large: "py-4 px-6 text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps = {
  intent?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  title: string;
  onPress: () => void;
  buttonStyle?: string;
  textStyle?: string;
};

export const Button = ({
  intent = "primary",
  size = "medium",
  title,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  const buttonClass = buttonStyles({ intent, size });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`${buttonClass} ${buttonStyle}`}
      onPress={onPress}
    >
      <Text className={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
