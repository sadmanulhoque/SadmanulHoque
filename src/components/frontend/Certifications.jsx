import React from 'react'
import { Award } from 'lucide-react';
import { DATA } from '@/config/data';

export default function Certifications() {
  return (
    <div>
        <section id="certifications" className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    Certifications
                </h2>

                <div className="space-y-7">
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-foreground">
                            AI Certificates
                        </h3>
                        <div className="space-y-4">
                            {DATA.certifications?.ai?.map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 rounded-lg border bg-card p-3 transition-shadow hover:shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm overflow-hidden">
                                        {(cert.image || cert.image_url) ? (
                                            <img
                                                src={cert.image || cert.image_url}
                                                alt={cert.title}
                                                className="h-full w-full object-contain"
                                            />
                                        ) : (
                                            <Award className="h-5 w-5 text-foreground" />
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm leading-none font-semibold">
                                            {cert.title}
                                        </p>
                                        <p className="mt-1 text-xs text-foreground">
                                            {cert.institution}{cert.org && ` / ${cert.org}`}
                                        </p>
                                    </div>
                                    <div className="flex shrink-0 items-center gap-2">
                                        <span className="text-xs text-foreground tabular-nums">
                                            {cert.year}
                                        </span>
                                        <Award className="h-4 w-4 text-primary" />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-foreground">
                            Software Certificates
                        </h3>
                        <div className="space-y-4">
                            {DATA.certifications?.software?.map((softCert, idx) => (
                                <div key={idx} className="flex items-center gap-4 rounded-lg border bg-card p-3 transition-shadow hover:shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm overflow-hidden">
                                        {(softCert.image || softCert.image_url) ? (
                                            <img
                                                src={softCert.image || softCert.image_url}
                                                alt={softCert.title}
                                                className="h-full w-full object-contain"
                                            />
                                        ) : (
                                            <Award className="h-5 w-5 text-foreground" />
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm leading-none font-semibold">
                                            {softCert.title}
                                        </p>
                                        <p className="mt-1 text-xs text-foreground">
                                            {softCert.institution}{softCert.org && ` / ${softCert.org}`}
                                        </p>
                                    </div>
                                    <div className="flex shrink-0 items-center gap-2">
                                        <span className="text-xs text-foreground tabular-nums">
                                            {softCert.year}
                                        </span>
                                        <Award className="h-4 w-4 text-primary" />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}


