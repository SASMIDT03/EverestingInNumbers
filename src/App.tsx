import logo from './assets/ein.png';
import {RouteForm} from "./components/RouteForm.tsx";
import type {RideInformation} from "./utils/types/RideInformation.ts";
import {StatsDisplay} from "./components/StatsDisplay.tsx";
import {useState} from "react";
import type {EverestingStats} from "./utils/types/EverestingStats.ts";
import { CalculateEverestingStats } from "./utils/EverestingCalculator.ts";

export default function App() {

    const [results, setResults] = useState<EverestingStats | null>(null);

    const handleCalculation = (data: RideInformation) => {
        console.log("App recievd data: ", data);
        setResults(CalculateEverestingStats(data))
    }

    return (
        <div className="flex flex-col items-center">
            <header className="
                w-full h-[12vh] border-b-1 border-b-primary-shade
                flex justify-center p-1">
                <img src={logo} alt="ein" className="h-full" />
            </header>
            <input
                type="text"
                placeholder="https://www.strava.com/segments/37032431"
                className="
                    bg-primary border-1 border-primary-shade rounded-lg
                    w-[70vw] h-[5vh] p-3
                    outline-none
                    focus:ring-2
                    focus:ring-dark-shade
                    transition-all duration-200
                    m-5
                    ">
            </input>

            <div className="flex flex-row items-center">
                <RouteForm onCalculate={handleCalculation} />
                <StatsDisplay stats={results} />
            </div>
        </div>
    )
}