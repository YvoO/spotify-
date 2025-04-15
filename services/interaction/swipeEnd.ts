import { runOnJS } from 'react-native-reanimated';

export const swipeEnd = (
  translateX: number,
  cb: (id: string) => void,
  id: string,
) => {
  "worklet";

  if (translateX < -200) {
    runOnJS(cb)(id);
  }
};
