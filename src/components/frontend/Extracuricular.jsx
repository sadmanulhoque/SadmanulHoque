import { PlayCircle, RotateCcw, Trophy, ZoomIn, ZoomOut } from 'lucide-react';
import { useRef, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog';

const videoPattern = /\.(mp4|webm|ogg|mov)(\?.*)?$/i;

function isDirectVideoUrl(url) {
    return videoPattern.test(url);
}

function isVideoUrl(url) {
    return isDirectVideoUrl(url) || /youtube|youtu\.be|vimeo/i.test(url);
}

export default function Extracuricular({ extracuriculars }) {
    const [previewImage, setPreviewImage] = useState(null);
    const [previewZoom, setPreviewZoom] = useState(1);
    const [failedImages, setFailedImages] = useState(new Set());
    const previewScrollRef = useRef(null);
    const previewImgRef = useRef(null);

    const handleImageError = (slug) => {
        setFailedImages(prev => new Set([...prev, slug]));
    };

    const handlePreviewDoubleClick = (event) => {
        const scrollArea = previewScrollRef.current;
        const image = previewImgRef.current;

        if (!scrollArea || !image) {
            return;
        }

        const imageRect = image.getBoundingClientRect();
        const scrollRect = scrollArea.getBoundingClientRect();
        const nextZoom = previewZoom >= 3 ? 1 : Math.min(3, previewZoom + 1);
        const xRatio = (event.clientX - imageRect.left) / imageRect.width;
        const yRatio = (event.clientY - imageRect.top) / imageRect.height;
        const xOffset = event.clientX - scrollRect.left;
        const yOffset = event.clientY - scrollRect.top;

        setPreviewZoom(nextZoom);

        requestAnimationFrame(() => {
            const nextImage = previewImgRef.current;

            if (!nextImage) {
                return;
            }

            scrollArea.scrollLeft = xRatio * nextImage.offsetWidth - xOffset;
            scrollArea.scrollTop = yRatio * nextImage.offsetHeight - yOffset;
        });
    };

    return (
        <div>
            <section id="extracurricular" className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    Extracurricular Activities
                </h2>
                <div className="space-y-6">
                    {extracuriculars.filter(item => item.status !== false).map((item, i) => {
                        const mediaItems = [
                            {
                                media: item.media_1,
                                thumb: item.media_thumb_1,
                                type: item.media_type_1,
                            },
                            {
                                media: item.media_2,
                                thumb: item.media_thumb_2,
                                type: item.media_type_2,
                            },
                            {
                                media: item.media_3,
                                thumb: item.media_thumb_3,
                                type: item.media_type_3,
                            },
                        ].filter(
                            (media) => Boolean(media.media || media.thumb),
                        );

                        return (
                            <div key={i} className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-background shadow-sm">
                                    {(!item.image && !item.image_url) || failedImages.has(item.slug) ? (
                                        <Trophy className="h-5 w-5 text-foreground" />
                                    ) : (
                                        <img
                                            src={item.image || item.image_url}
                                            alt={item.title}
                                            onError={() => handleImageError(item.slug)}
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="min-w-0 flex-1 space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-1">
                                        <h3 className="leading-none font-semibold">
                                            {item.title}
                                        </h3>
                                        <span className="text-sm text-foreground tabular-nums">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-primary">
                                        {item.org}
                                    </p>
                                    <p className="mt-1 text-sm text-foreground">
                                        {item.desc}
                                    </p>

                                    {mediaItems.length > 0 && (
                                        <div className="mt-3 grid grid-cols-3 gap-2">
                                            {mediaItems.map((media, index) => {
                                                const isVideo =
                                                    media.type === 'video' ||
                                                    (!media.type &&
                                                        media.media &&
                                                        isVideoUrl(
                                                            media.media,
                                                        ));
                                                const preview =
                                                    media.thumb || media.media;
                                                const fullImage =
                                                    media.media || preview;
                                                const imageAlt = `${item.title} media ${index + 1}`;
                                                const tileClassName =
                                                    'group relative aspect-[4/3] overflow-hidden rounded-md border bg-muted shadow-sm sm:aspect-video';
                                                const tileMedia = (
                                                    <>
                                                        {isVideo &&
                                                        !media.thumb &&
                                                        media.media &&
                                                        isDirectVideoUrl(
                                                            media.media,
                                                        ) ? (
                                                            <video
                                                                src={
                                                                    media.media
                                                                }
                                                                className="h-full w-full object-cover"
                                                                muted
                                                                playsInline
                                                                preload="metadata"
                                                            />
                                                        ) : isVideo &&
                                                          !media.thumb ? (
                                                            <div className="flex h-full w-full items-center justify-center bg-muted" />
                                                        ) : (
                                                            <img
                                                                src={preview}
                                                                alt={imageAlt}
                                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                            />
                                                        )}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                                                        {isVideo && (
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/90 shadow-sm">
                                                                    <PlayCircle className="h-5 w-5 text-primary" />
                                                                </div>
                                                            </div>
                                                        )}
                                                        <span className="absolute right-1.5 bottom-1.5 rounded bg-background/90 px-1.5 py-0.5 text-[10px] font-medium text-foreground shadow-sm">
                                                            {isVideo
                                                                ? 'Video'
                                                                : 'Photo'}
                                                        </span>
                                                    </>
                                                );

                                                if (!isVideo && fullImage) {
                                                    return (
                                                        <button
                                                            key={`${item.slug}-media-${index}`}
                                                            type="button"
                                                            onClick={() => {
                                                                setPreviewZoom(
                                                                    1,
                                                                );
                                                                setPreviewImage(
                                                                    {
                                                                        src: fullImage,
                                                                        alt: imageAlt,
                                                                    },
                                                                );
                                                            }}
                                                            className={`${tileClassName} text-left`}
                                                        >
                                                            {tileMedia}
                                                        </button>
                                                    );
                                                }

                                                return (
                                                    <a
                                                        key={`${item.slug}-media-${index}`}
                                                        href={
                                                            media.media ||
                                                            undefined
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className={
                                                            tileClassName
                                                        }
                                                    >
                                                        {tileMedia}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Dialog
                open={Boolean(previewImage)}
                onOpenChange={(open) => {
                    if (!open) {
                        setPreviewImage(null);
                        setPreviewZoom(1);
                    }
                }}
            >
                <DialogContent className="border-0 bg-transparent p-0 shadow-none sm:max-w-5xl">
                    <DialogTitle className="sr-only">Image preview</DialogTitle>
                    {previewImage && (
                        <div
                            ref={previewScrollRef}
                            className="relative max-h-[85vh] overflow-auto rounded-lg bg-black/20"
                        >
                            <img
                                ref={previewImgRef}
                                src={previewImage.src}
                                alt={previewImage.alt}
                                className="block h-auto max-w-none rounded-lg object-contain transition-[width] duration-200"
                                style={{
                                    width: `${previewZoom * 100}%`,
                                }}
                                onDoubleClick={handlePreviewDoubleClick}
                            />
                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-background/95 p-1 shadow-lg">
                                <button
                                    type="button"
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                                    onClick={() =>
                                        setPreviewZoom((zoom) =>
                                            Math.max(1, zoom - 0.25),
                                        )
                                    }
                                >
                                    <ZoomOut className="h-4 w-4" />
                                    <span className="sr-only">Zoom out</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex h-9 min-w-12 items-center justify-center rounded-full px-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                                    onClick={() => setPreviewZoom(1)}
                                >
                                    {Math.round(previewZoom * 100)}%
                                    <span className="sr-only">Reset zoom</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                                    onClick={() => setPreviewZoom(1)}
                                >
                                    <RotateCcw className="h-4 w-4" />
                                    <span className="sr-only">Reset zoom</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                                    onClick={() =>
                                        setPreviewZoom((zoom) =>
                                            Math.min(3, zoom + 0.25),
                                        )
                                    }
                                >
                                    <ZoomIn className="h-4 w-4" />
                                    <span className="sr-only">Zoom in</span>
                                </button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}