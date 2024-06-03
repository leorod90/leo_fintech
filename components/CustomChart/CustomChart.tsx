import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
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
  data: CryptoHistory | undefined
}

const skipElements = (arr: any[], n: number): any[] => {
  const result: any[] = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
};

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

function MyAnimatedLine({ points, color }: { points: PointsArray, color: string }) {
  const { path } = useLinePath(points);
  // 👇 create an animated path
  const animPath = useAnimatedPath(path);

  return <Path path={animPath} style="stroke" color={color} strokeWidth={3} />;
}

export default function CustomChart({ data }: Props) {
  const font = useFont(mono, 8);
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    console.log(`${month} ${day} ${year}`)
    return `${month}/${day}`;
  };

  const DATA = data?.prices.map(item => {
    return {
      date: formatTimestamp(item[0]),
      price: item[1]
    };
  });

  const [dd, setfirst] = useState(DATA)
  const [color, setfirstt] = useState('red')
  const test = () => {
    DATA?.reverse();
    setfirstt('green')
    setfirst(DATA)
  }

  return (
    <View style={{ height: 300 }}>
      <Button title='test' onPress={test} />
      {dd && <CartesianChart
        chartPressState={state}
        data={dd}
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
      </CartesianChart>}
    </View>
  )
}