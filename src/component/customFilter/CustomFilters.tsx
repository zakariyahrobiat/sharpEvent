interface filterProps{
    name: string,
    label:string,
    id:string, 
    
}

const CustomFilters = (props:filterProps) => {
    const {name, label, id} = props
  return (
    <div className="flex justify-start items-center gap-3 pb-2">
        <input type="checkbox" name={name} id={id}  />
        <label htmlFor={id} className="text-sm font-semibold text-[#767676]">{label}</label>
    </div>
  )
}

export default CustomFilters