import { BasicImageProps } from './header/types';

const Logo = ({ Icon, onclick }: BasicImageProps) => {
    return (
        <div onClick={onclick}>
            <Icon />
        </div>
    );
};

export default Logo;
