export default function App() {
    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder="https://www.strava.com/segments/37032431"
                className="
                    bg-primary border-1 border-primary-shade rounded-lg
                    w-[75vw] h-[5vh] p-3
                    outline-none
                    focus:ring-2
                    focus:ring-dark-shade
                    transition-all duration-200
                    "></input>
        </div>
    )
}