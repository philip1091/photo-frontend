import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
const navigation = [
  { name: 'Overview', href: '/', current: true },
  { name: 'Personal', href: '/personal', current: false },
  { name: 'Commissioned', href: '/commissioned', current: false },
  { name: 'About', href: '/#', current: false },
]

const size = [
  {size: 50, current: false},
  {size: 200, current: true},
  {size: 500, current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar({ currentPath }) {

  return (
    <Disclosure as="nav" className="bg-black/10">
      <div className="mx-auto w-full px-[15px] h-[100px]">
        <div className="relative flex h-full items-center justify-center md:justify-between">

          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 top-[50px] -translate-y-1/2">
            <img
              alt="Logo"
              src="/logo/2.png"
              className="h-[80px] w-[200px]"
            />
          </div>


          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4 justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.href === currentPath ? 'text-black' : 'text-gray-400 ',
                    ' px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>


          <div className="hidden md:flex absolute right-0">
            {size.map((item, i) => (
                <div
                  key={i}
                  className={classNames(
                    item.current ? 'text-black' : 'text-gray-400 ',
                    ' text-sm px-2',
                  )}
                >
                  {item.size}
                </div>
              ))}
          </div>

        </div>
      </div>

    </Disclosure>
  )
}
