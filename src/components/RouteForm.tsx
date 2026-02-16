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

    const [errors, setErrors] = useState<Partial<Record<keyof RideInformation, string>>>({});

    const updateField = (field: keyof RideInformation, newValue: number) => {
        setFormData({...formData, [field]: newValue});
        // Clear Error when user is trying to fix it
        if (errors[field]) {
            setErrors(prev => {
                const updatedErrors = { ...prev }
                delete updatedErrors[field]
                return updatedErrors
            })
        }
    }

    function checkFormData()  {
        console.log("checkform called")
        const tempErrors: Partial<Record<keyof RideInformation, string>> = {}

        if (formData.climbingDistance <= 0) { tempErrors.climbingDistance = "Distance needs to be greater than 0";
        console.log("euoioihoihoih")}
        if (formData.elevationGain <= 0) { tempErrors.elevationGain = "Elevation gain needs to be greater than 0"; }
        if (formData.climbingSpeed <= 0) { tempErrors.climbingSpeed = "Climbingspeed needs to be greater than 0"; }
        if (formData.descendingSpeed <= 0) { tempErrors.descendingSpeed = "Descendingspeed needs to be greater than 0"; }
        if (formData.totalWeight <= 0) { tempErrors.totalWeight = "Total weight needs to be greater than 0"; }

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            props.onCalculate(formData);
        }
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
                                   onChange={(value) => updateField("climbingDistance", value)}
                                   errorText={errors.climbingDistance}/>
                        <FormField displayText={"Avg. climbing speed (km/h)"} placeholderText={"15km/h"}
                                   onChange={(value) => updateField("climbingSpeed", value)}
                                   errorText={errors.climbingSpeed}/>
                        <FormField displayText={"Avg. climbing watts (w)"} placeholderText={"200w"}
                                   onChange={(value) => updateField("climbingWatts", value)}
                                   subText={"Not required"}/>
                        <FormField displayText={"Number of rest stops"} placeholderText={"0"}
                                   onChange={(value) => updateField("numberOfStops", value)}/>

                    </div>
                    <div> {/* Col 2 */}
                        <FormField displayText={"Elevation gain per lap (m)"} placeholderText={"100m"}
                                   onChange={(value) => updateField("elevationGain", value)}
                                   errorText={errors.elevationGain}/>
                        <FormField displayText={"Avg. descending speed (km/h)"} placeholderText={"40km/h"}
                                   onChange={(value) => updateField("descendingSpeed", value)}
                                   errorText={errors.descendingSpeed}/>
                        <FormField displayText={"Total weight (kg)"} placeholderText={"70kg"}
                                   onChange={(value) => updateField("totalWeight", value)}
                                   errorText={errors.totalWeight}/>
                        <FormField displayText={"Avg rest stop duration (min)"} placeholderText={"0min"}
                                   onChange={(value) => updateField("durationOfStops", value)}/>
                    </div>
                </div>

                <button
                    onClick={checkFormData}
                    className="
                    w-full bg-green rounded-lg text-primary p-2 text-lg cursor-pointer
                    py-2 px-4
                    shadow-[0_4px_0_0_primary]
                    transition-all duration-75
                    active:shadow-none
                    active:translate-y-1
                    hover:bg-green-shade">Calculate Everesting Stats</button>
            </div>
        </div>
    )
}