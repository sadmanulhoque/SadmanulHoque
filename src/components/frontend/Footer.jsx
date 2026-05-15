
import { DATA } from '@/config/data';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        {/* Contact Badge */}
        <div className="px-4 py-1.5 rounded-full border border-muted-foreground/20 bg-muted text-xs font-semibold uppercase tracking-wider text-foreground">
          CONTACT
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold">{DATA.footer?.title}</h2>

        {/* Description */}
        <p className="text-base text-foreground max-w-xl">
          {DATA.footer?.description}
        </p>

        {/* Say Hello Button */}
        <a
          href={`mailto:${DATA.contact?.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity font-medium"
        >
          Say Hello
          <Mail className="h-5 w-5" />
        </a>

        {/* Copyright */}
        <div className="border-t pt-8 text-sm text-foreground w-full">
          <p>© {DATA.footer?.year} {DATA.name}. {DATA.footer?.copyright}</p>
        </div>
      </div>
    </footer>
  )
}


