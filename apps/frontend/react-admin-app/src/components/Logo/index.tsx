import Icon from "@ant-design/icons";
import LogoIcon from "@/assets/svg/Logo.svg?react";
export interface ILogoProps {
  className?: string;
  children?: React.ReactNode;
}
const Logo = ({ className, children }: ILogoProps) => {
  return (
    <div>
      <Icon component={LogoIcon} className={`font-color-primary ${className}`} />
      {children}
    </div>
  );
};

export default Logo;
