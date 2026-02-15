type FormFieldProps = {
    displayText: string
    placeholderText: string
    onChange: (value: number) => void
    subText?: string
    errorText?: string
}

export function FormField(props: FormFieldProps) {
    return (
        <div className="flex flex-col m-3 relative">

            {props.errorText && (
                <div className="absolute -top-6 right-0 bg-red text-primary text-[12px] px-2 py-1 rounded animate-bounce">
                    {props.errorText}
                    {/* Tiny arrow pointing down */}
                    <div className="absolute -bottom-1 right-2 w-2 h-2 bg-red rotate-45"></div>
                </div>
            )}

            <label className="text-dark font-semibold" >{props.displayText}</label>
            <input
                type="number"
                placeholder={props.placeholderText}
                onChange = {(e) => props.onChange(Number(e.target.value))}
                className="
                    bg-secondary
                    p-2
                    border-1 border-primary-shade rounded-lg
                    outline-none focus:ring-2 focus:ring-dark
                    transition-all duration-300
                    appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                    hover:border-1 hover:border-dark
                    "
            />

            <div className="text-dark-shade text-sm pl-2">{props.subText}</div>


        </div>
    )
}