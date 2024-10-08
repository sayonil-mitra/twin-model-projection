import * as ss from "simple-statistics";

export function projection(
  historicalData = [112, 118, 132, 129, 121, 135, 148, 148, 136, 119],
  forecast = 10
) {
  // Example historical data
  const data = historicalData;
  const xValues = data.map((item, index) => index);

  // Transform x values to include a quadratic term
  const transformedData = xValues.map((x, i) => [x, x * x, data[i]]);

  // Split into X and Y arrays for regression
  const xForRegression = transformedData.map((d) => [d[0], d[1]]); // [x, x^2]
  const yForRegression = transformedData.map((d) => d[2]); // y values (data)

  // Perform linear regression on transformed data (quadratic model)
  const regression = ss.linearRegressionLine(
    ss.linearRegression(xForRegression, yForRegression)
  );

  // Function to forecast future points (using the regression model)
  const forecastData = (numPoints) => {
    const projectedX = Array.from(
      { length: numPoints },
      (_, i) => data.length + i
    );
    return projectedX.map((x) => regression(x));
    // return projectedX.map((x) => regression([x, x * x]));
  };

  const futureDataPoints = forecastData(forecast); // Predict next 10 points
  const extendedData = [...data, ...futureDataPoints];

  return extendedData;
}
