import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
        <div>
          <Image
            src="/logo/humpi-technology-dark.svg"
            alt="Humpi Technology"
            width={210}
            height={58}
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{company.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide">Company</h2>
          <div className="mt-4 grid gap-3">
            {navigation.slice(1, 8).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide">Services</h2>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 7).map((service) => (
              <Link
                key={service.slug}
                href="/services"
                className="text-sm text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a
              className="flex gap-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={`mailto:${company.email}`}
            >
              <Mail className="mt-0.5 size-4" /> {company.email}
            </a>
            <a
              className="flex gap-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={`tel:${company.phone}`}
            >
              <Phone className="mt-0.5 size-4" /> {company.phone}
            </a>
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4" /> {company.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} Humpi Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
