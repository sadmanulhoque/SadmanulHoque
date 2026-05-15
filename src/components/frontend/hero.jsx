
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from "@/config/data";

export default function Hero() {
  return (
    <div>
            <section id="hero" className="space-y-6 pt-10">
                        {/* Top row: avatar + name/role */}
                        <div className="flex items-center gap-6">
                            <Avatar className="h-24 w-24 shrink-0 border-2 border-muted shadow-lg">
                                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                                    {DATA.name}
                                </h1>
                                <p className="text-base text-foreground">
                                    {DATA.role}
                                </p>
                            </div>
                        </div>
                        {/* Description below */}
                        <p className="text-base text-foreground leading-relaxed">
                            {DATA.description}
                        </p>
                    </section>
    </div>
  )
}


