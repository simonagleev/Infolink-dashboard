import * as React from "react";

import Number from "../Number";

interface IThirdProps {
  data: any;
}

export const Third = ({ data }: IThirdProps) => {
  const itemList = data.stages.items ? Object.values(data.stages.items) : [];
  return (
    <>
      {itemList.map((item: any, idx) => (
        <React.Fragment key={idx}>
          <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <Number>{item.number}</Number>
            <h3
              style={{
                color: "#434A54",
                fontSize: 18,
                fontWeight: 200,
                margin: 0,
                padding: 0,
              }}
            >
              {item.name}
            </h3>
          </div>
          <div style={{ display: "inline-block" }}>
            <h3
              style={{
                backgroundColor: item.status_color,
                borderRadius: 25,
                fontSize: 12,
                padding: 5,
                paddingRight: 10,
                paddingLeft: 10,
                fontWeight: 400,
                color: "white",
                textAlign: "center",
                margin: 0,
                marginLeft: 35,
              }}
            >
              {String(item.status).toUpperCase()}
            </h3>
          </div>
          <br />
          <i>
            <div
              style={{
                margin: 10,
                marginTop: 5,
                marginLeft: 35,
                fontSize: 12,
              }}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </i>
        </React.Fragment>
      ))}
    </>
  );
};

export default Third;
