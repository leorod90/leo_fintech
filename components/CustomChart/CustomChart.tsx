import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CryptoHistory } from '@/hooks/useFetch'
import {
  CartesianChart,
  Line,
  useAnimatedPath,
  useChartPressState,
  useLinePath,
  type PointsArray,
} from "victory-native";
import { Circle, useFont, Path } from '@shopify/react-native-skia';
import mono from '../../assets/fonts/SpaceMono-Regular.ttf';
import type { SharedValue } from "react-native-reanimated";

interface Props {
  data: {
    date: string;
    price: string;
  }[];
  color: string;
};

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${month}/${day}`;
};


export const skipElements = (arr: any[], n: number): any[] => {
  const result: any[] = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
    if (result.length === 7) {
      break;
    }
  }
  return result;
};

export function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

export function MyAnimatedLine({ points, color }: { points: PointsArray, color: string }) {
  const { path } = useLinePath(points);
  // 👇 create an animated path
  const animPath = useAnimatedPath(path);

  return <Path path={animPath} style="stroke" color={color} strokeWidth={3} />;
}

export default function CustomChart({ data, color }: Props) {
  const font = useFont(mono, 8);
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  return (
    <View style={{ height: 300 }}>
      <CartesianChart
        chartPressState={state}
        data={data}
        xKey="date"
        yKeys={["price"]}
        axisOptions={{ font }}
      >
        {/* 👇 render function exposes various data, such as points. */}
        {({ points }) => (
          <>
            {/* and we'll use the Line component to render a line path. */}
            <MyAnimatedLine points={points.price} color={color} strokeWidth={3} />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.price.position} />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  )
}