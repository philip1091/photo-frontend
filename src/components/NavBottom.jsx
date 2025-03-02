import React from 'react'
import { Link } from "react-router-dom";
const navigation = [
  { name: 'Overview', href: '/'},
  { name: 'Personal', href: '/personal' },
  { name: 'Commissioned', href: '/commissioned' },
  { name: 'About', href: '/#' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const NavBottom = (props) => {
  return (
    <div className="md:hidden block left-1/2 transform -translate-x-1/2 navBackground-btm fixed bottom-1 w-[90vw] sm:w-[60vw]">
      <div className="flex justify-around">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.href === props.currentPath ? 'underline' : '',
              ' px-3 py-2 text-sm text-gray-100',
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBottom
