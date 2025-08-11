import Link from "next/link"
import { IControl } from "@/lib/types"

export const ControlSidebar = ({ controls }: { controls: IControl[] }) => {
  return (
    <div className='w-20 flex flex-col items-center justify-center bg-white py-4'>
      <div className="flex flex-col gap-6">
        {controls.map(control => {
          const Icon = control.icon
          return (
            <Link key={control.id} href={control.path} className="flex flex-col items-center text-gray-600 hover:text-black">
              <Icon size={24} />
              <span className="text-xs">{control.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}