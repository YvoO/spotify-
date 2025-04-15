import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { snapPoint } from 'react-native-redash';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { swipeActive, swipeEnd } from '@/services/interaction';

import { DeleteButton } from './styled';

export const HorizontalScroll = ({
  children, id, onDelete,
}: HorizontalScrollProps) => {
  const translateX = useSharedValue(0);
  const position = useSharedValue(0);
  const [itemHeight, setItemHeight] = React.useState<number>();
  const [deleteLoading, setDeleteLoading] = React.useState(false);

  const pan = Gesture.Pan()
    .onStart((event) => {
      translateX.value = event.translationX;
    })
    .onUpdate((event) => {
      if (event.translationX < 0) {
        swipeActive(translateX, event.translationX);
      }
    })
    .onEnd((event) => {
      const dest = position.value === 0
        ? snapPoint(translateX.value, event.velocityX, [0, 0, -75])
        : 0;

      position.value = position.value === 0 ? 1 : 0;
      translateX.value = withSpring(dest, { damping: 500, stiffness: 1000 });
      swipeEnd(translateX.value, onDelete, id);
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    flex: 1,
  }));

  const deleteStyle = useAnimatedStyle(() => ({
    position: "absolute",
    width: -translateX.value,
    right: 0,
  }));

  const deleteAction = () => {
    setDeleteLoading(true);
    onDelete(id);
  };

  return (
    <GestureHandlerRootView onLayout={(event) => setItemHeight(event.nativeEvent.layout.height)}>
      <GestureDetector gesture={pan}>
        <Animated.View style={style}>
          {children}
        </Animated.View>
      </GestureDetector>
      <Animated.View style={deleteStyle}>
        <TouchableOpacity onPress={deleteAction} disabled={deleteLoading}>
          <DeleteButton itemHeight={itemHeight}>
            <FontAwesome5
              name="trash-alt"
              color="#fff"
              size={18}
            />
          </DeleteButton>
        </TouchableOpacity>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

type HorizontalScrollProps = {
  children: React.ReactElement;
  id: string;
  onDelete: (id: string) => void;
  itemHeight?: number;
};
