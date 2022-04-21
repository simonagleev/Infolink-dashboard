import * as React from "react";
import { useState, useEffect } from "react";

import Circle from "./Circle";

interface IChartProps {
  children?: React.ReactChild;
  height: number;
  width: number;
  data: any;
}

const createInnerConfig = (data: any) => {
  let items = [
    {
      color: data.income.color,
      value: data.income.percent,
    },
    {
      color: data.penalty.color,
      value: data.penalty.percent,
    },
    {
      color: data.penaltyRisk.color,
      value: data.penaltyRisk.percent,
    },
    {
      color: data.riskShortfall.color,
      value: data.riskShortfall.percent,
    },
  ];

  items = items.map(({ color }, idx) => {
    let newValue = 0;
    while (idx >= 0) {
      newValue += items[idx].value;
      idx--;
    }
    return {
      color,
      value: newValue,
    };
  });

  items = items.reverse();

  let rotate = items.reduce((acm, { value }) => Math.max(acm, value), 0);

  rotate = (rotate / 100) * 360;

  return [items, -rotate];
};

const createOuterConfig = (data: any) => {
  const percent = data.risks.percent;
  return [
    {
      color: data.risks.color,
      value: percent,
    },
  ];
};

export const Chart = ({ data, height, width, children }: IChartProps) => {
  const [config, setConfig] = useState<any>();

  useEffect(() => {
    const outerConfig = createOuterConfig(data);
    const [innerConfig, innerRotate] = createInnerConfig(data);
    setConfig({
      outerConfig,
      innerConfig,
      innerRotate,
    });
  }, [data, height, width]);

  return config ? (
    <div style={{ position: "relative", height, width }}>
      <div
        style={{
          border: "1px solid #BFC5CE",
          borderRadius: "50%",
          height,
          width,
        }}
      >
        <div style={{ margin: -5 }}>
          <Circle
            responsive
            progress={config.outerConfig}
            bgColor="transparent"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
        }}
      >
        <div style={{ margin: -5 }}>
          <Circle
            responsive
            progress={config.innerConfig}
            bgColor="#BFC5CE"
            style={{
              transform: `rotate(${config.innerRotate}deg)`,
            }}
          />
        </div>
      </div>
      {children}
    </div>
  ) : null;
};

export default Chart;
