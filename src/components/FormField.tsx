type FormFieldProps = {
    displayText: string
    placeholderText: string
    onChange: (value: number) => void
}

export function FormField(props: FormFieldProps) {
    return (
        <div className="flex flex-col m-3">
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
        </div>
    )
}