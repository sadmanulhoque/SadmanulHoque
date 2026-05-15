
import React from 'react';
import { Cpu, Briefcase, Database, Network } from 'lucide-react';
import { DATA } from '@/config/data';

const iconMap = {
  'AI & Embedded Systems': <Cpu className="h-6 w-6" />,
  'Custom Business Solutions': <Briefcase className="h-6 w-6" />,
  'Database & System Architecture': <Database className="h-6 w-6" />,
  'Network Design & Simulation': <Network className="h-6 w-6" />,
};

export default function Services() {
  return (
    <div>
      <section id="services" className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.services?.map((service, i) => (
            <div key={i} className="p-5 rounded-xl border bg-card space-y-3 hover:shadow-sm transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-primary/5 text-primary">
                {iconMap[service.title] || <Cpu className="h-6 w-6" />}
              </div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


