import React from 'react'

interface SpacerProps {
    light?: boolean;
}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  return (
    <div 
    className='bg-transparent h-26'
    // className={`${props.light ? 'bg-white' : 'bg-[#111]'} h-26 `}
    ></div>
  )
}

export default Spacer