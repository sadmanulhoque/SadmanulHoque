import { DATA } from '@/config/data';
import { Badge } from '@/components/ui/badge';

export default function Tools() {
  return (
    <div>
           <section id="tools" className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Tools</h2>
                        <div className="flex flex-wrap gap-2">
                            {DATA.tools?.map((tool, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer"
                                >
                                    {(tool.image_url || tool.image) && (
                                        <img
                                            src={tool.image_url || tool.image}
                                            alt={tool.name}
                                            className="h-4 w-4 rounded-sm object-contain shrink-0"
                                          
                                        />
                                    )}
                                    {tool.name}
                                </Badge>
                            ))}
                        </div>
                    </section>
    </div>
  )
}


