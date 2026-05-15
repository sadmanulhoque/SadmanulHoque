import { GraduationCap } from 'lucide-react';
import { DATA } from '@/config/data';

export default function Educations() {
    return (
        <div>
            <section id="education" className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                <div className="space-y-8">
                    {DATA.education?.map((edu, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm overflow-hidden">
                                {(edu.image || edu.image_url) ? (
                                    <img
                                        src={edu.image || edu.image_url}
                                        alt={edu.degree_title}
                                        className="h-full w-full object-contain"
                                    />
                                ) : (
                                    <GraduationCap className="h-6 w-6 text-foreground" />
                                )}
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold leading-none">{edu.degree_title}</h3>
                                    <span className="text-sm text-foreground tabular-nums">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-sm text-foreground">{edu.institution}</p>
                                {edu.cgpa && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm font-medium text-foreground">{edu.cgpa}</span>
                                        {edu.note && <span className="text-xs font-medium text-green-600 dark:text-green-300 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800 shadow-lg shadow-green-500/20 dark:shadow-green-400/10 animate-pulse">{edu.note}</span>}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

