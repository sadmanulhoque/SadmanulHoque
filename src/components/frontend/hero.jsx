
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function Hero() {
  return (
    <div>
            <section id="hero" className="space-y-6 pt-10">
                        {/* Top row: avatar + name/role */}
                        <div className="flex items-center gap-6">
                            <Avatar className="h-24 w-24 shrink-0 border-2 border-muted shadow-lg">
                                <AvatarImage src={"https://github.com/shadcn.png"} alt="Sadman" />
                                <AvatarFallback>SH</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                                    Sadmanul Hoque
                                </h1>
                                <p className="text-base text-foreground">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                        {/* Description below */}
                        <p className="text-base text-foreground leading-relaxed">
                          Graduated with a 91% CGPA in B.Sc. in Computer Science & Engineering. Awarded Merit Scholarship for outstanding academic performance. Industry experience building production ready systems.
                        </p>
                    </section>
    </div>
  )
}


