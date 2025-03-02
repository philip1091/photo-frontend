import React from 'react'
const size = [
  {size: 50, current: false, display:"large"},
  {size: 200, current: true, display:"medium"},
  {size: 500, current: false, display:"small"},
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const NavSize = (props) => {
  const handleSizeChange = (display) => {
    props.display(display)
  }
  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 navBackground-side flex flex-col items-center justify-center gap-4 md:hidden py-3 px-3">
        {size.map((item, i) => (
            <div
              key={i}
              className={classNames(
                props.size === item.display ? 'underline' : '',
                ' text-sm px-2 cursor-pointer text-gray-100',
              )}
              onClick={()=>{handleSizeChange(item.display)}}
            >
              {item.size}
            </div>
          ))}
      </div>
    </>
  )
}

export default NavSize
