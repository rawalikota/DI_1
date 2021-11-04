import * as data from "../data/output.json";
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

export default function Chart() {
    return (
        <div style={{ width: "1100px",
                    height: "600px",
                    backgroundColor: "black" }}>
        <ResponsiveContainer width="100%"
                            height="100%">
            <LineChart
            width={700}
            height={400}
            data={data.information}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mark" />
            <YAxis datakey="date"/>
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
    