import Link from "next/link";
import style from "./nav.module.css"
interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}

export function NavItem({ label, href, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={
        `${style.navitem} ${className} text-white`
      }
    >
      {label}
    </Link>
  );
}