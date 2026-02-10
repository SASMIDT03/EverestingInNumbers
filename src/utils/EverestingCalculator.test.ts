import { describe, it, expect } from "vitest"
import { CalculateEverestingStats } from "./EverestingCalculator.ts";
import type { RideInformation } from "./types/RideInformation.ts";

let inputDate: RideInformation = {
    climbingDistance: 2,
    elevationGain: 88,
    totalWeight: 70,
    climbingSpeed: 15,
    descendingSpeed: 40,
    climbingWatts: 150,
    numberOfStops: 20,
    durationOfStops: 120,
}

describe("Everesting Calculations", () => {

    it("Should have total laps 101 for elevation gain 88m", () => {
        const result = CalculateEverestingStats(inputDate);
        expect(result.totalNumberOfLaps).toBe(101);
    })
})