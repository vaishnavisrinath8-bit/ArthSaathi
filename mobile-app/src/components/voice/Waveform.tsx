import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue, useAnimatedStyle,
  withTiming, Easing,
} from 'react-native-reanimated';
import { C } from '../../constants/colors';

type Props = {
  active: boolean;
  level?: number; // 0 to 1
  color?: string;
};

// Each bar has a sensitivity multiplier so they feel organic
const BARS = [
  { maxH: 30, sensitivity: 0.5 },
  { maxH: 55, sensitivity: 0.8 },
  { maxH: 70, sensitivity: 1.0 },
  { maxH: 90, sensitivity: 1.0 },
  { maxH: 70, sensitivity: 1.0 },
  { maxH: 55, sensitivity: 0.8 },
  { maxH: 30, sensitivity: 0.5 },
];

const MIN_H = 4;

function WaveBar({ active, level, maxH, sensitivity, color }: {
  active: boolean;
  level: number;
  maxH: number;
  sensitivity: number;
  color: string;
}) {
  const animH = useSharedValue(MIN_H);

  useEffect(() => {
    if (!active) {
      animH.value = withTiming(MIN_H, { duration: 200 });
      return;
    }
    const target = MIN_H + (maxH - MIN_H) * level * sensitivity;
    animH.value = withTiming(target, {
      duration: 80,
      easing: Easing.out(Easing.ease),
    });
  }, [active, level]);

  const style = useAnimatedStyle(() => ({ height: animH.value }));

  return (
    <Animated.View style={[{
      width: 5, borderRadius: 3,
      backgroundColor: color, minHeight: MIN_H,
    }, style]} />
  );
}

export function Waveform({ active, level = 0, color = C.emerald500 }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, height: 40 }}>
      {BARS.map((bar, i) => (
        <WaveBar
          key={i}
          active={active}
          level={level}
          maxH={bar.maxH}
          sensitivity={bar.sensitivity}
          color={color}
        />
      ))}
    </View>
  );
}