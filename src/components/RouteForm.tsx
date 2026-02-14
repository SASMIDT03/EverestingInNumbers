import {FormField} from "./FormField.tsx";
import type {RideInformation} from "../utils/types/RideInformation.ts";
import {useState} from "react";

type RouteFormProps = {
    onCalculate: (data: RideInformation) => void;
}

export function RouteForm(props: RouteFormProps) {

    const [formData, setFormData] = useState<RideInformation>({
        climbingDistance: 0,
        elevationGain: 0,
        totalWeight: 0,
        climbingSpeed: 0,
        descendingSpeed: 0,
        climbingWatts: 0,
        numberOfStops: 0,
        durationOfStops: 0,
    })

    const updateField = (field: keyof RideInformation, newValue: number) => {
        setFormData({...formData, [field]: newValue});
    }

    return (
        <div className="
            bg-primary border-1 border-primary-shade rounded-lg
            p-6 m-6 w-[30vw]
            ">
            <div>Route Information</div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div> {/* Col 1 */}
                        <FormField displayText={"Distance of climb (km)"} placeholderText={"5km"}
                                   onChange={(value) => updateField("climbingDistance", value)}/>
                        <FormField displayText={"Avg. climbing speed (km/h)"} placeholderText={"15km/h"}
                                   onChange={(value) => updateField("climbingSpeed", value)}/>
                        <FormField displayText={"Avg. climbing watts (w)"} placeholderText={"200w"}
                                   onChange={(value) => updateField("climbingWatts", value)}
                                   subText={"Not required"}/>
                        <FormField displayText={"Number of rest stops"} placeholderText={"0"}
                                   onChange={(value) => updateField("numberOfStops", value)}/>

                    </div>
                    <div> {/* Col 2 */}
                        <FormField displayText={"Elevation gain per lap (m)"} placeholderText={"100m"}
                                   onChange={(value) => updateField("elevationGain", value)}/>
                        <FormField displayText={"Avg. descending speed (km/h)"} placeholderText={"40km/h"}
                                   onChange={(value) => updateField("descendingSpeed", value)}/>
                        <FormField displayText={"Total weight (kg)"} placeholderText={"70kg"}
                                   onChange={(value) => updateField("totalWeight", value)}/>
                        <FormField displayText={"Avg rest stop duration (min)"} placeholderText={"0min"}
                                   onChange={(value) => updateField("durationOfStops", value)}/>
                    </div>
                </div>

                <button
                    onClick={() => props.onCalculate(formData)}
                    className="
                    w-full bg-dark rounded-lg text-primary p-2 text-lg cursor-pointer
                    py-2 px-4
                    shadow-[0_4px_0_0_primary]
                    transition-all duration-75
                    active:shadow-none
                    active:translate-y-1
                    hover:bg-dark-2">Calculate Everesting Stats</button>
            </div>
        </div>
    )
}