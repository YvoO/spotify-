import { Dimensions } from 'react-native';
import {
  withSpring,
  SharedValue,
} from 'react-native-reanimated';

const { width } = Dimensions.get("window");

export const swipeActive = (
  translateX: SharedValue<number>,
  offset: number,
) => {
  "worklet";

  const multiplier = offset < 0 ? -1 : 1;

  if (offset < multiplier * 200) {
    translateX.value = withSpring(multiplier * width + 10, { damping: 500, stiffness: 1000 });
  } else {
    translateX.value = offset;
  }
};
