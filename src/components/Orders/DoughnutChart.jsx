import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart({ data, title }) {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title,
              font: {
                size: 16,
              },
            },
          },
        },
      });
    }
    return () => {
      if (chartInstanceRef.current !== null) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [data, title]);

  return <canvas ref={canvasRef} />;
}

export default DoughnutChart;
