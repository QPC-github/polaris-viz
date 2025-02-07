import {useMemo} from 'react';
import type {LineChartDataSeriesWithDefaults} from '@shopify/polaris-viz-core';

export function useFormatData(data: LineChartDataSeriesWithDefaults[]) {
  const reversedSeries = useMemo(() => data.slice().reverse(), [data]);

  const longestSeriesIndex = useMemo(
    () =>
      reversedSeries.reduce((maxIndex, currentSeries, currentIndex) => {
        return reversedSeries[maxIndex].data.length < currentSeries.data.length
          ? currentIndex
          : maxIndex;
      }, 0),
    [reversedSeries],
  );

  const longestSeriesLength = reversedSeries[longestSeriesIndex]
    ? reversedSeries[longestSeriesIndex].data.length - 1
    : 0;

  return {reversedSeries, longestSeriesLength, longestSeriesIndex};
}
