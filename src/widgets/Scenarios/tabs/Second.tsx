import * as React from "react";

import Number from "../Number";

interface ISecondProps {
  data: any;
}

export const Second = ({ data }: ISecondProps) => {
  const itemList: any[] = data.criteria.items
    ? Object.values(data.criteria.items)
    : [];
  return (
    <div
      style={{
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <h4 style={{ color: "#656D78", margin: 0 }}>{data.criteria.text}</h4>
      {itemList.map((item, idx) => (
        <React.Fragment key={idx}>
          <div style={{ display: "flex", marginTop: 10 }}>
            <Number>{item.number}</Number>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <h3
                style={{
                  color: "#434A54",
                  fontSize: 12,
                  fontWeight: 200,
                  margin: 0,
                  padding: 0,
                }}
              >
                {item.text}
              </h3>
              <div>
                <h3
                  style={{
                    backgroundColor: item.color,
                    borderRadius: 25,
                    fontSize: 12,
                    padding: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontWeight: 400,
                    color: "white",
                    textAlign: "center",
                    maxWidth: 120,
                    margin: 0,
                  }}
                >
                  {String(item.status).toUpperCase()}
                </h3>
              </div>
              <span
                style={{
                  color: "#434A54",
                  fontSize: 13,
                  margin: 0,
                }}
              >
                {item.description}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Second;
