declare module "canvas-confetti" {
  export interface Options {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: Array<"square" | "circle">;
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  }

  export interface GlobalOptions {
    resize?: boolean;
    useWorker?: boolean;
  }

  export interface ConfettiInstance {
    (options?: Options): void;
    reset(): void;
  }

  export type CreateTypes = ConfettiInstance;

  export interface ConfettiFactory {
    create(
      canvas: HTMLCanvasElement,
      globalOptions?: GlobalOptions,
    ): ConfettiInstance;
  }

  const confetti: ConfettiFactory;
  export default confetti;
}
