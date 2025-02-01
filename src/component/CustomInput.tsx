interface inputProps{
    name: string,
    label:string,
    type?:string,
    id: string,
    placeholder: string
}

const CustomInput = (props:inputProps) => {
    const {name, label, type, id, placeholder} = props
  return (
    <div className="pt-1">
        <label htmlFor={id} className="text-sm font-semibold text-black">{label}</label>
        <input type={type ? type : "text"} name={name} id={id} placeholder={placeholder} className="w-full bg-white py-2 px-5 rounded-lg text-sm font-semibold" />
    </div>
  )
}

export default CustomInput