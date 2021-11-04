import * as data from "../data/output.json";        //imports JSON data file from 
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
        <div style={{ width: "1200px",
                    height: "700px",
                    backgroundColor: "mediumaquamarine" }}>
        <ResponsiveContainer width="100%"
                            height="100%">
            <LineChart
            width={800}
            height={500}
            data={data.information}             //using the json data from the imported data object
            margin={{
                top: 20,
                right: 20,
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
                activeDot={{ r: 10 }}
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
    }
    