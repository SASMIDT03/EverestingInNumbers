import logo from './assets/ein.png';
import {RouteForm} from "./components/RouteForm.tsx";
import type {RideInformation} from "./utils/types/RideInformation.ts";
import type {EverestingStats} from "./utils/types/EverestingStats.ts";
import {StatsDisplay} from "./components/StatsDisplay.tsx";
import {useState} from "react";
import { CalculateEverestingStats } from "./utils/EverestingCalculator.ts";

function App() {

    const [results, setResults] = useState<EverestingStats | null>(null);

    const handleCalculation = (data: RideInformation) => {
        console.log("App received data: ", data);
        setResults(CalculateEverestingStats(data))
    }

    return (
        <div className="flex flex-col min-h-screen items-center">
            <header className="
                w-full h-[12vh] border-b-1 border-b-primary-shade
                flex justify-center p-1">
                <img src={logo} alt="ein" className="h-full"/>
            </header>
            {/*
            <input
                type="text"
                placeholder="https://www.strava.com/segments/37032431"
                onChange={(e) => setSegmentUrl(e.target.value)}
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
            */}

            <div className="bg-primary border-1 border-primary-shade rounded-lg w-[75vw] p-3 m-3">
                <div className="text-xl font-bold">What is an Everesting?</div>
                <p>Everesting is a cycling challenge where you pick one climb, any climb, and repeat it until you've reached a total of 8.849 meters of elevation gain - the height of Mount Everest. It's one of cycling's toughest challenges, testing your physical and mental endurance.</p>
                <p>This is a calculator for calculating statistics related to doing an everest including total number of reps, total distance and so on.</p>                <div className="grid md:grid-cols-2 gap-4">
            </div>
            </div>

            <div className="flex flex-row items-stretch">
                <RouteForm onCalculate={handleCalculation}/>
                <StatsDisplay stats={results}/>
            </div>

            <footer className="bg-dark h-[10vh] w-full"> </footer>
        </div>
    )
}

export default App