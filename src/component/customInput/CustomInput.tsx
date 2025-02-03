
interface inputProps{
    name: string,
    label:string,
    type?:string,
    id: string,
    placeholder: string
    value:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props:inputProps) => {
    const {name, label, type, id, placeholder, value, onChange} = props
   
  return (
    <div className="pt-1">
        <label htmlFor={id} className="text-sm font-semibold text-black">{label}</label>
        <input type={type ? type : "text"} name={name} value={value} id={id} placeholder={placeholder} onChange={onChange} className="w-full bg-white py-2 px-5 rounded-lg text-sm font-semibold" />
    </div>
  )
}

export default CustomInput