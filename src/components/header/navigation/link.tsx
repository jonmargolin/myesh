import { useNavigate } from 'react-router-dom';
import { LinkProps } from '../types';

const Link = ({ name, href, isSelected }: LinkProps) => {
    const navigate = useNavigate();
    return (
        <div className="px-6" onClick={() => navigate(href)}>
            <span className={`${isSelected ? 'text-gray-700' : 'text-gray-400'} text-sm font-ploni  hover:text-gray-500`}>{name}</span>
        </div>
    );
};

export default Link;
