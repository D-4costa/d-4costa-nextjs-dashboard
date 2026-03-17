
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Customers', href: '/dashboard/customers' },
  { name: 'Invoices', href: '/dashboard/invoices' }
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx('navlink', {
            active: pathname === link.href
          })}
        >
          {link.name}
        </Link>
      ))}
    </>
  )
}
