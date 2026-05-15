import { DATA } from '@/config/data';

export default function Experience() {
  return (
    <div>
                <section id="work" className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
                        <div className="space-y-8">
                         {DATA.experience?.map((exp, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm overflow-hidden p-1">
                                        <img src={exp.logoUrl} alt={exp.company} className="h-full w-full object-contain" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold leading-none">{exp.title}</h3>
                                            <span className="text-sm text-foreground tabular-nums">
                                                 {exp.start} - {exp.end}
                                            </span>
                                        </div>
                                        <p className="text-sm text-primary font-medium">{exp.company}</p>
                                        <p className="text-sm text-foreground mt-2">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                        ))}
                        </div>
                    </section>
    </div>
  )
}

