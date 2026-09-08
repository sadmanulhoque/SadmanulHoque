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
                            {exp.logoUrl ? (
                                <img src={exp.logoUrl} alt={exp.company} className="h-full w-full object-contain" />
                            ) : (
                                <div className="h-full w-full bg-slate-100 flex items-center justify-center rounded-full text-lg font-bold text-slate-500">
                                    {exp.company ? exp.company.charAt(0) : "W"}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold leading-none">{exp.title}</h3>
                                <span className="text-sm text-foreground tabular-nums">
                                        {exp.start} - {exp.end}
                                </span>
                            </div>
                            <p className="text-sm text-primary font-medium">{exp.company}</p>
                            <div className="text-sm text-foreground mt-2 space-y-1.5">
                                {exp.description.split('\n').map((line, i) => {
                                    const isBullet = line.trim().startsWith('•');
                                    if (isBullet) {
                                        return (
                                            <div key={i} className="flex items-start">
                                                <span className="mr-2 leading-tight">•</span>
                                                <span className="leading-snug">{line.replace(/^•\s*/, '')}</span>
                                            </div>
                                        );
                                    }
                                    return <p key={i} className="leading-snug">{line}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
