export type LinkPropsList = {
    href: string;
    name: string;
};
export type LinkProps = LinkPropsList & { isSelected: boolean };
export type BasicImageProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onclick?: () => void;
};
export type TranslationMenuProps = {
    changeDirection: (direction: 'ltr' | 'rtl') => void;
};
