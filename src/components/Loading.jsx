import { IconLoader } from "@tabler/icons-react"

function Loading({className}) {
  return (
    <>
      <div className={`flex flex-col items-center ${className}`}>
        <IconLoader stroke={2} size={180} className="text-cyan-400/50 animate-spin [animation-duration:5s]" />
        <p className="font-arimo text-white/65 text-xl mt-2 animate-pulse [animation-duration:3s]">Please Wait...</p>
      </div>
    </>
  )
}

export default Loading