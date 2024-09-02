import { hS, mS, vS } from "@/lib/responsive";
import React, { FC } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
} from "react-native";

type Props = {
  label: string;
  labelStyles?: TextStyle;
} & TouchableOpacityProps;

const Button: FC<Props> = ({ label, labelStyles = {}, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          width: hS(100),
          height: vS(30),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: mS(5),
        },
        props.style,
      ]}
    >
      <Text
        style={[
          {
            fontSize: hS(16),
            fontWeight: "700",
          },
          labelStyles,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
