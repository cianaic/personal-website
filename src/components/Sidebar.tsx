"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Writing", href: "/writing" },
  { name: "Links", href: "/links" },
  { name: "Projects", href: "/projects" },
  { name: "Automations", href: "/automations" },
  { name: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-white">
      <div className="p-8">
        <Link href="/" className="block mb-8">
          <h1 className="text-xl font-medium text-gray-900">Cian McGlynn</h1>
        </Link>
        
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href === "/writing" && pathname.startsWith("/blog")) ||
              (item.href === "/links" && pathname.startsWith("/links"));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}