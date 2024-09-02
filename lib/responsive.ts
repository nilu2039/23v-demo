import { Dimensions } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const hS = (size: number) => {
  return scale(size);
};

export const vS = (size: number) => {
  return verticalScale(size);
};

export const mS = (size: number, factor: number = 0.5) => {
  return moderateScale(size, factor);
};
