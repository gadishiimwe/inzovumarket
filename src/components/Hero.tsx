import { ReactNode } from "react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: "sm" | "md" | "lg";
}

const Hero = ({ backgroundImage, title, subtitle, children, height = "md" }: HeroProps) => {
  const heightClasses = {
    sm: "h-64",
    md: "h-96",
    lg: "h-screen"
  };

  return (
    <div 
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center text-white z-10 px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Hero;
