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
  {size: 50, current: false, display:"large"},
  {size: 200, current: true, display:"medium"},
  {size: 500, current: false, display:"small"},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props) {
  const handleSizeChange = (display) => {
    props.display(display)
  }

  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto w-full px-[15px] h-[70px] fixed top-0 left-0 navBackground">
        <div className="relative flex h-full items-center justify-center md:justify-between">

          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0">
          <Link to="/">
            <img
              alt="Logo"
              src={props.scrollY < 24 ? "/logo/b.png" : "/logo/w.png"}
              className="w-[265px] "
            />
          </Link>
          </div>


          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4 justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.href === props.currentPath ? 'underline' : '',
                    props.scrollY < 24 ? "text-gray-800" : "text-gray-100",
                    ' px-3 py-2 text-sm ',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {
            props.currentPath === "/" ?
            <div className="hidden md:flex absolute right-0">
              {size.map((item, i) => (
                  <div
                    key={i}
                    className={classNames(
                      props.size === item.display ? 'underline' : '',
                      props.scrollY < 24 ? "text-gray-800" : "text-gray-100",
                      ' text-sm px-2 cursor-pointer',
                    )}
                    onClick={()=>{handleSizeChange(item.display)}}
                  >
                    {item.size}
                  </div>
                ))}
            </div>
            :
            <div className="hidden md:flex absolute right-0"></div>
          }


        </div>
      </div>

    </Disclosure>
  )
}
