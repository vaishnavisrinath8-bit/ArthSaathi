import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue, useAnimatedStyle,
  withTiming, cancelAnimation, Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { C } from '../../constants/colors';

type Props = {
  listening: boolean;
  onPress: () => void;
  level?: number; // 0 to 1 normalized metering
};

const SIZE = 96;

export function MicButton({ listening, onPress, level = 0 }: Props) {
  const r1 = useSharedValue(1);
  const r2 = useSharedValue(1);
  const r3 = useSharedValue(1);

  useEffect(() => {
    if (!listening) {
      cancelAnimation(r1); r1.value = withTiming(1, { duration: 200 });
      cancelAnimation(r2); r2.value = withTiming(1, { duration: 200 });
      cancelAnimation(r3); r3.value = withTiming(1, { duration: 200 });
    }
  }, [listening]);

  // Drive ring scales from live metering level
  useEffect(() => {
    if (!listening) return;

    // Each ring expands proportionally but at different multipliers
    // so they feel layered and natural
    const base = 1 + level * 0.6;   // inner  ring: 1.0 → 1.6
    const mid  = 1 + level * 1.0;   // middle ring: 1.0 → 2.0
    const out  = 1 + level * 1.4;   // outer  ring: 1.0 → 2.4

    r1.value = withTiming(base, { duration: 80, easing: Easing.out(Easing.ease) });
    r2.value = withTiming(mid,  { duration: 80, easing: Easing.out(Easing.ease) });
    r3.value = withTiming(out,  { duration: 80, easing: Easing.out(Easing.ease) });
  }, [level, listening]);

  const s1 = useAnimatedStyle(() => ({
    transform: [{ scale: r1.value }],
    opacity: listening ? 0.5 : 0,
  }));
  const s2 = useAnimatedStyle(() => ({
    transform: [{ scale: r2.value }],
    opacity: listening ? 0.35 : 0,
  }));
  const s3 = useAnimatedStyle(() => ({
    transform: [{ scale: r3.value }],
    opacity: listening ? 0.2 : 0,
  }));

  const ringBase = {
    position:     'absolute' as const,
    width:        SIZE,
    height:       SIZE,
    borderRadius: SIZE / 2,
    borderWidth:  2,
    borderColor:  C.emerald400,
  };

  return (
    <Animated.View style={{
      alignItems: 'center', justifyContent: 'center',
      width: SIZE * 2.6, height: SIZE * 2.6,
    }}>
      <Animated.View style={[ringBase, s3]} />
      <Animated.View style={[ringBase, s2]} />
      <Animated.View style={[ringBase, s1]} />
      <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
        <LinearGradient
          colors={listening ? [C.red500 ?? '#ef4444', '#dc2626'] : [C.emerald500, C.teal600]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: SIZE, height: SIZE, borderRadius: SIZE / 2,
            alignItems: 'center', justifyContent: 'center',
            shadowColor: listening ? '#ef4444' : C.emerald500,
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.45, shadowRadius: 16, elevation: 10,
          }}
        >
          <Feather name={listening ? 'square' : 'mic'} color={C.white} size={36} />
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}