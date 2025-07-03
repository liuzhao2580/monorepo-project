import { PawPrint } from "lucide-react";
export interface ILogoProps {
  className?: string;
  children?: React.ReactNode;
}
const Logo = ({ className, children }: ILogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <PawPrint className={`font-color-primary ${className}`}></PawPrint>
      {children}
    </div>
  );
};

export default Logo;
