type FormFieldProps = {
    displayText: string
}

export function FormField(props: FormFieldProps) {
    return (
        <div className="flex flex-col m-3">
            <label className="text-dark font-semibold" >{props.displayText}</label>
            <input
                type="number"
                className="
                    bg-secondary
                    p-2
                    border-1 border-primary-shade rounded-lg"
            />
        </div>
    )
}