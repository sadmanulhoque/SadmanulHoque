import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DATA } from '@/config/data';
import githubIcon from '@/assets/images/common/github.png';

export default function Projects() {
  return (
    <div>
       <section id="projects" className="space-y-6">
                <div className="space-y-2 text-center sm:text-left">
                    <h2 className="text-3xl font-bold tracking-tight">
                        My Projects
                    </h2>
                    <p className="text-foreground">
                        Check out some of my recent work and open-source
                        projects.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {DATA.projects?.map((project, index) => {
                        const image = project.image || project.image_url;

                        return (
                            <Card
                                key={index}
                                className="group overflow-hidden border transition-all hover:shadow-md"
                            >
                                <div className="relative aspect-video overflow-hidden bg-muted">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-foreground/50">
                                            <Layers className="h-10 w-10 opacity-20" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                </div>
                                <CardHeader className="space-y-1 p-4">
                                    <CardTitle className="text-lg">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 px-4 pb-4">
                                    {project.description && (
                                        <p className="line-clamp-2 text-sm text-foreground">
                                            {project.description}
                                        </p>
                                    )}
                                    {((project.technologies && project.technologies.length > 0) || (project.practices && project.practices.length > 0) || (project.tools && project.tools.length > 0)) && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies?.map((tech, idx) => (
                                                <Badge
                                                    key={`tech-${idx}`}
                                                    variant="outline"
                                                    className="rounded-md px-2 py-1 text-[11px] font-semibold"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.practices?.map((practice, idx) => (
                                                <Badge
                                                    key={`practice-${idx}`}
                                                    variant="outline"
                                                    className="rounded-md px-2 py-1 text-[11px] font-semibold"
                                                >
                                                    {practice}
                                                </Badge>
                                            ))}
                                            {project.tools?.map((tool, idx) => (
                                                <Badge
                                                    key={`tool-${idx}`}
                                                    variant="outline"
                                                    className="rounded-md px-2 py-1 text-[11px] font-semibold"
                                                >
                                                    {tool}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex gap-2 pt-2">
                                        {project.links?.sort((a, b) => {
                                            if (a.type === 'Demo') return -1;
                                            if (b.type === 'Demo') return 1;
                                            return 0;
                                        }).map((link, idx) => (
                                            <Button
                                                key={idx}
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="h-8 gap-1 text-xs"
                                            >
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {link.type === 'Source' && (
                                                        <img 
                                                            src={githubIcon} 
                                                            alt="Source"
                                                            className="h-3 w-3 dark:invert"
                                                        />
                                                    )}
                                                    {(link.type === 'Demo' || link.type === 'Live') && <ExternalLink className="h-3 w-3" />}
                                                    {link.type}
                                                </a>
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
                {DATA.seeMoreProjects?.href && (
                    <div className="flex justify-center pt-4">
                        <Button
                            asChild
                            className="gap-2"
                            variant="ghost"
                        >
                            <a href={DATA.seeMoreProjects.href} target="_blank" rel="noreferrer">
                                {DATA.seeMoreProjects.label}
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                )}
            </section>
    </div>
  )
}


