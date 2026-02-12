"use client";

import { cn } from "@/lib/utils";
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
} from "react";

interface StarsBackgroundProps {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minStarSize?: number;
    maxStarSize?: number;
    className?: string;
    starColor?: string;
    backgroundColor?: string;
}

export const StarsBackground = ({
    starDensity = 0.0003,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minStarSize = 0.8,
    maxStarSize = 1.5,
    className,
    starColor = "#FFF",
    backgroundColor = "transparent",
}: StarsBackgroundProps) => {
    const [stars, setStars] = useState<any[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const generateStars = useCallback(
        (width: number, height: number): any[] => {
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle =
                    allStarsTwinkle || Math.random() < twinkleProbability;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    dx: (Math.random() - 0.5) * 0.05,
                    dy: (Math.random() - 0.5) * 0.05,
                    size:
                        Math.random() * (maxStarSize - minStarSize) + minStarSize,
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * 0.05 + 0.005,
                    shouldTwinkle,
                };
            });
        },
        [starDensity, allStarsTwinkle, twinkleProbability, minStarSize, maxStarSize]
    );

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;

                const { width, height } = canvas.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;
                setStars(generateStars(width, height));
            }
        };

        updateStars();

        const resizeObserver = new ResizeObserver(updateStars);
        if (canvasRef.current) {
            resizeObserver.observe(canvasRef.current);
        }

        return () => {
            if (canvasRef.current) {
                resizeObserver.unobserve(canvasRef.current);
            }
        };
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minStarSize,
        maxStarSize,
        generateStars,
    ]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                ctx.save();
                ctx.globalAlpha = star.opacity;
                ctx.fillStyle = starColor;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                if (star.shouldTwinkle) {
                    star.opacity += star.twinkleSpeed;
                    if (star.opacity > 1 || star.opacity < 0) {
                        star.twinkleSpeed = -star.twinkleSpeed;
                    }
                }

                // Update position
                star.x += star.dx;
                star.y += star.dy;

                // Wrap around
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [stars]);

    return (
        <div
            className={cn("fixed inset-0 -z-20 h-full w-full", className)}
            style={{ background: backgroundColor }}
        >
            <canvas
                ref={canvasRef}
                className="h-full w-full"
            />
        </div>
    );
};
