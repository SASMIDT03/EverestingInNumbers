import { describe, it, expect } from "vitest"
import { CalculateEverestingStats } from "./EverestingCalculator.ts";
import type { RideInformation } from "./types/RideInformation.ts";
import type {EverestingStats} from "./types/EverestingStats.ts";

let inputDate: RideInformation = {
    climbingDistance: 2.03,
    elevationGain: 88,
    totalWeight: 70,
    climbingSpeed: 15,
    descendingSpeed: 40,
    climbingWatts: 150,
    numberOfStops: 20,
    durationOfStops: 120,
}

const result: EverestingStats = CalculateEverestingStats(inputDate);

describe("Everesting Calculations", () => {

    it("Should have total laps 101 for elevation gain 88m", () => {
        expect(result.totalNumberOfLaps).toBe(101);
    })

    it("Should have total distance 411 for distance 2.03", () => {
        expect(result.totalDistance).toBe(411);
    })

    it("Should have avg. climbing time 488 for distance 2.03 and climbingspeed 15", () => {
        expect(result.avgClimbingTime).toBe(488);
    })

    it("Should have avg. descending time 183 for distance 2.03 and descendingspeed 40", () => {
        expect(result.avgDescendingTime).toBe(183);
    })

    it("Should have total climbing time 49288 for distance 2.03 and climbingspeed 15", () => {
        expect(result.totalClimbingTime).toBe(49288);
    })

    it("Should have total descending time 18483 for distance 2.03 and descendingspeed 40", () => {
        expect(result.totalDescendingTime).toBe(18483);
    })
})