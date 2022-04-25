import * as React from "react";
import { useRef, useLayoutEffect } from "react";

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import { AutoSizer } from "react-declarative";

import {
  createChart,
  DeepPartial,
  ChartOptions,
  LineStyleOptions,
  SeriesOptionsCommon,
} from "lightweight-charts";

import IChartItem from "./IChartItem";

import { fromStockDate, stampLabel, toStockDate } from "../../utils/getMomentStamp";

interface IChartProps {
  height: number;
  width: number;
  items: IChartItem[];
}

const priorityMap: any = {
  contract: 5,
  scenario: 4,
  fact: 3,
  plan: 2,
  progress: 1,
};

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  tooltip: {
    position: "absolute",
    color: "gray",
    margin: 0,
    left: 5,
    top: 5,
  },
});

const chartOptions: DeepPartial<ChartOptions> & any = {
  layout: {
    backgroundColor: "#0000",
    lineColor: "#0000",
    textColor: "#191919",
  },
  leftPriceScale: {
    borderColor: "#E5E5E5",
    scaleMargins: {
      top: 0.3,
      bottom: 0.25,
    },
  },
  crosshair: {
    /*horzLine: {
      color: '#0000',
      labelVisible: false,
    },*/
  },
  grid: {
    vertLines: {
      color: "#E5E5E5",
    },
    horzLines: {
      color: "#0000",
    },
  },
  handleScroll: {
    vertTouchDrag: false,
  },
  priceScale: {
    autoScale: false,
  },
};

const sort = (arr: any[]) =>
  arr.sort(({ code: a }, { code: b }) => priorityMap[a] - priorityMap[b]);

type Ref = React.MutableRefObject<HTMLDivElement>;

const seriesCommonOptions: DeepPartial<LineStyleOptions & SeriesOptionsCommon> =
  {
    lineWidth: 2,
    crosshairMarkerVisible: false,
    lastValueVisible: false,
    priceLineVisible: false,
    priceScaleId: "left",
  };

const Chart = ({ height, width, items }: IChartProps) => {
  const classes = useStyles();

  const elementRef: Ref = useRef<HTMLDivElement>(undefined as never);

  useLayoutEffect(() => {
    const { current: chartElement } = elementRef;

    items.forEach((item) => {
      item.values.forEach((v: any) => {
        const { time } = toStockDate(v.stamp);
        v.time = time;
      });
    });

    const total: any[] = items.map((i) => i.values).flat();

    const chart = createChart(chartElement, {
      ...chartOptions,
      height,
      width,
      localization: {
        locale: "ru-RU",
        timeFormatter({
          day = 0,
          month = 0,
          year = 0,
        }) {
          const stamp = fromStockDate({
            day,
            month,
            year,
          });
          const current = total
            .filter((item) => item.stamp === stamp)
            .find((item) => item.label);
          if (current?.label) {
            return `${stampLabel(stamp)} (${current.label})`;
          } else {
            return stampLabel(stamp);
          }
        },
        priceFormatter(price: number) {
          return Math.max(price, 0);
        },
      },
    });

    (chart as any).applyOptions({
      priceScale: {
        position: "left",
      },
    });

    /**
     * Важен порядок установки линий графика. Стоимость госконтракта
     * может перекрыть все линии сплошной заливкой при неверном порядке
     * наложения друг на друга
     */
    for (const item of sort(items)) {
      const series = chart.addAreaSeries({
        ...seriesCommonOptions,
        topColor: item.color,
        bottomColor: item.color,
        lineColor: item.color,
        priceScaleId: "left",
        priceFormat: {
          type: "custom",
          formatter: (v: any) => v.toFixed(),
          minMove: 1,
        },
      });
      const values = item.values
        .map((item: any) => item.value)
        .sort((a: number, b: number) => a - b);
      let slice = values.length;
      if (item.code === "fact") {
        const plan = items.find(({ code }) => code === "progress");
        if (plan) {
          slice -= plan.values.length - 1;
        }
      }
      const max = Math.max(...values.slice(0, slice));
      if (item.code !== "scenario") {
        /*const priceLine = series.createPriceLine({
          price: max,
          color: item.color,
          lineWidth: 2,
          lineStyle: LineStyle.Dotted,
          axisLabelVisible: true,
          title: '',
        });*/
      }
      series.setData(item.values);
    }

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [height, width, items]);

  return <div ref={elementRef} className={classes.root} />;
};

interface IStockChartProps {
  className?: string;
  style?: React.CSSProperties;
  items: IChartItem[];
  line?: number;
  title?: string;
}

export const StockChart = ({
  items,
  className,
  title = "Кол-во заявок",
  style,
}: IStockChartProps) => (
  <Box className={className} style={style}>
    <AutoSizer>
      {({ height, width }) => (
        <div style={{ height, width }}>
          <p
            style={{
              margin: 0,
              height: 25,
              fontWeight: 400,
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 100,
            }}
          >
            {title}
          </p>
          <Chart height={height - 25} width={width} items={items} />
        </div>
      )}
    </AutoSizer>
  </Box>
);

export default StockChart;
