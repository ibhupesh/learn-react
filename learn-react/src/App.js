import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import './output.css'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
]
const now = new Date();
const currentTime = now.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true // This forces AM/PM
});

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
    {/* Navigation bar*/}
    <Disclosure as="nav" className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center"> {/* Changed justify-between to justify-center */}
          
          {/* 1. Desktop Menu Centering */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center"> {/* Changed sm:justify-start to sm:justify-center */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2. Mobile Menu Centering */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-center"> {/* Added flex flex-col items-center */}
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium text-center w-full', // Added text-center
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    {/* Main body content */}
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className= "text-4xl tracking-tight text-blue-900 sm:text-5xl">{currentTime}</h1>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <br/>Blah Blah Frontend sucks!            
            </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Gemini is very helpful in learning.... 
            <strong> Haina ?</strong> but agr yeh bhi aa gya toh zayada kaam krna pda krega phew!
          </p>
        </div>
      </main>
    </>
  )
}