
import React, { useState, useEffect } from 'react';
import { Home, Code2, ExternalLink, CircleUser, Mail, Sun, Moon } from 'lucide-react';
import Hero from '@/components/frontend/hero';
import Experience from './components/frontend/experience';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Educations from './components/frontend/educations';
import Skills from './components/frontend/skills';
import Tools from './components/frontend/tools';

export default function App() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }

        return false;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <TooltipProvider>
            <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
                <main className="mx-auto max-w-2xl space-y-24 px-6 py-20">
                    {/* Hero Section */}
                    <Hero />
                    <Experience/>
                    <Educations/>
                    <Skills/>
                    <Tools/>
                </main>

                {/* Floating Dock / Navigation */}
                <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
                    <nav className="flex items-center gap-1 rounded-full border border-muted/50 bg-background/80 p-2 shadow-2xl backdrop-blur-md">
                        <DockItem
                            icon={<Home className="h-5 w-5" />}
                            label="Home"
                            href="#hero"
                        />
                        <DockItem
                            icon={<Code2 className="h-5 w-5" />}
                            label="Projects"
                            href="#projects"
                        />
                        <Separator
                            orientation="vertical"
                            className="mx-1 h-8"
                        />

                        <DockItem
                            icon={<ExternalLink className="h-5 w-5" />}
                            label="GitHub"
                            href="https://github.com"
                        />

                        <DockItem
                            icon={<CircleUser className="h-5 w-5" />}
                            label="LinkedIn"
                            href="https://linkedin.com"
                        />

                        <DockItem
                            icon={<Mail className="h-5 w-5" />}
                            label="Contact"
                            href="#contact"
                        />

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() =>
                                        setIsDark((prev) => !prev)
                                    }
                                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-accent active:scale-95"
                                    aria-label="Toggle theme"
                                >
                                    {isDark ? (
                                        <Sun className="h-5 w-5" />
                                    ) : (
                                        <Moon className="h-5 w-5" />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="text-xs">
                                {isDark ? 'Light mode' : 'Dark mode'}
                            </TooltipContent>
                        </Tooltip>
                    </nav>
                </div>
            </div>
        </TooltipProvider>
    );
}

function DockItem({ icon, label, href }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-accent active:scale-95"
                >
                    {icon}
                </a>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
                {label}
            </TooltipContent>
        </Tooltip>
    );
}