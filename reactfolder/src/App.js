import React from "react";
import customData from "./output.json";

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";

const data = [
	{"mark":1.46,"date":1922},{"mark":1.485,"date":1923},{"mark":1.485,"date":1923},{"mark":1.524,"date":1925},{"mark":1.552,"date":1926},{"mark":1.58,"date":1926},{"mark":1.58,"date":1928},{"mark":1.595,"date":1928},{"mark":1.605,"date":1929},{"mark":1.62,"date":1932},{"mark":1.65,"date":1932},{"mark":1.65,"date":1932},{"mark":1.66,"date":1939},{"mark":1.66,"date":1941},{"mark":1.66,"date":1941},{"mark":1.71,"date":1943},{"mark":1.72,"date":1951},{"mark":1.73,"date":1954},{"mark":1.74,"date":1956},{"mark":1.75,"date":1956},{"mark":1.76,"date":1956},{"mark":1.76,"date":1957},{"mark":1.77,"date":1957},{"mark":1.78,"date":1958},{"mark":1.8,"date":1958},{"mark":1.81,"date":1958},{"mark":1.82,"date":1958},{"mark":1.83,"date":1958},{"mark":1.84,"date":1959},{"mark":1.85,"date":1960},{"mark":1.86,"date":1960},{"mark":1.87,"date":1961},{"mark":1.88,"date":1961},{"mark":1.9,"date":1961},{"mark":1.91,"date":1961},{"mark":1.92,"date":1971},{"mark":1.92,"date":1972},{"mark":1.94,"date":1972},{"mark":1.94,"date":1974},{"mark":1.95,"date":1974},{"mark":1.96,"date":1976},{"mark":1.96,"date":1977},{"mark":1.97,"date":1977},{"mark":1.97,"date":1977},{"mark":2,"date":1977},{"mark":2.01,"date":1978},{"mark":2.01,"date":1978},{"mark":2.02,"date":1982},{"mark":2.03,"date":1983},{"mark":2.03,"date":1983},{"mark":2.04,"date":1983},{"mark":2.05,"date":1984},{"mark":2.07,"date":1984},{"mark":2.07,"date":1986},{"mark":2.08,"date":1986},{"mark":2.09,"date":1987}
];

export default function App() {
return (
	<div style={{ width: "1100px",
				height: "600px",
				backgroundColor: "black" }}>
	<ResponsiveContainer width="100%"
						height="100%">
		<LineChart
		width={700}
		height={400}
		data={data}
		margin={{
			top: 5,
			right: 30,
			left: 20,
			bottom: 5,
		}}
		>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="mark" />
		<YAxis />
		<Tooltip />
		<Legend />
		<Line
			type="monotone"
			dataKey="date"
			stroke="#8884d8"
			activeDot={{ r: 8 }}
		/>
		</LineChart>
	</ResponsiveContainer>
	</div>
);
}
