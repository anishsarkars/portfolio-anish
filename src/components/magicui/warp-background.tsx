import React, { useCallback } from "react";
import { cn } from "@/lib/utils";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

interface WarpBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: number;
  opacity?: number;
}

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
  blur = 0,
  opacity = 0.7,
  className,
  ...props
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{ filter: `blur(${blur}px)` }}
      {...props}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          particles: {
            groups: {
              z5000: {
                number: {
                  value: 70,
                },
                zIndex: {
                  value: 5000,
                },
              },
              z7500: {
                number: {
                  value: 30,
                },
                zIndex: {
                  value: 7500,
                },
              },
              z2500: {
                number: {
                  value: 50,
                },
                zIndex: {
                  value: 2500,
                },
              },
              z1000: {
                number: {
                  value: 40,
                },
                zIndex: {
                  value: 1000,
                },
              },
            },
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: [
                "rgba(108, 99, 255, 0.7)",
                "rgba(47, 166, 187, 0.7)",
                "rgba(255, 80, 124, 0.7)",
              ],
              animation: {
                enable: true,
                speed: 20,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: opacity,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: {
                enable: true,
                minimumValue: 1,
              },
              animation: {
                enable: true,
                speed: 10,
                minimumValue: 0.5,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
              warp: true,
            },
            zIndex: {
              value: 5,
              opacityRate: 0.5,
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 100,
                size: 5,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
              },
              push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"],
              },
              remove: {
                quantity: 2,
              },
            },
          },
          detectRetina: true,
          background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          emitters: [],
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

WarpBackground.displayName = "WarpBackground"; 