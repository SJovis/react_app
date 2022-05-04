import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // const totalMaximum = Math.max(...dataPointValues);
  const totalMaximum = dataPointValues.reduce((a, b) => a + b, 0); // sum all values

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
