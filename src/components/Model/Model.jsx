import { useState } from "react"
import Chart from "./Chart/Chart"

export default function Model() {

  let [projectionLength, setProjectionLength] = useState(10)

  function handleChange(event) {
    setProjectionLength(parseInt(event.target.value))
  }

  return <div>
    Change length or projected data:
    <input value={projectionLength} type="number" onChange={handleChange} />
    <br />
    <Chart forecast={projectionLength} />
  </div>
}