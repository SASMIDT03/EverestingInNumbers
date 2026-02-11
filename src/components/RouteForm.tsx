import {FormField} from "./FormField.tsx";

export function RouteForm() {
    return (
        <div className="
            bg-primary border-1 border-primary-shade rounded-lg
            p-6 m-6
            ">
            <div>Route Information</div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div> {/* Col 1 */}
                    <FormField displayText={"Distance of climb (km)"} />
                    <FormField displayText={"Avg. climbing speed (km/h)"} />
                    <FormField displayText={"Avg. climbing watts (w)"} />
                    <FormField displayText={"Number of rest stops"} />

                </div>
                <div> {/* Col 2 */}
                    <FormField displayText={"Elevation gain per lap (m)"} />
                    <FormField displayText={"Avg. descending speed (km/h)"} />
                    <FormField displayText={"Total weight (kg)"} />
                    <FormField displayText={"Avg rest stop duration (min)"} />

                </div>
            </form>
        </div>
    )
}