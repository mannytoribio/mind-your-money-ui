import { useState, useEffect } from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory"

  type Props = {
    percentBurn: number
  }

  export default function MontlyBurn (percentBurn: number) {
    let percent = percentBurn
    return (
      <div>
        {/* <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            data={percent}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
          style={{
            data: { fill: ({ percent }: Props) => {
              const color = percent > 30 ? "green" : "red";
              return percent === 1 ? color : "transparent";
            }
            }
          }}
          />
          <VictoryAnimation duration={1000} data={percent}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg> */}
      </div>
    );
  }

