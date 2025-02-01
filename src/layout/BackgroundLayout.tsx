import { PropsWithChildren } from "react"

const BackgroundLayout = ({children}:PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center text-center relative h-[100%] bg-white"><div className="w-screen">{children}</div></div>
  )
}

export default BackgroundLayout