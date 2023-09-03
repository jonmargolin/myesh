
import {LinkPropsList } from '../types';
import {ReactComponent as eshLogo} from './../../../assets/esh.svg'
import Logo from '../../logo';
import Link from './link';
import { useTranslation } from 'react-i18next';
import { computed } from '@preact/signals-react';
import { settingSignal } from '../../../globals/signal/signal-store';
import { useLocation } from 'react-router-dom';


// navigation for desktop browsers layout change  according to the language direction in setting signal.
const Navigation = () => {
    const { t  } = useTranslation(); 
    const location = useLocation()

    const  siteLinks: LinkPropsList[]=[{href: "/Home", name:t("home")},{href: "/blog", name: t("blog")}]
   
    const  currentDirection = computed(() => settingSignal.value.direction);
    return (
        <div className={`flex ${currentDirection.value=== "ltr"? "grow": ""} ${currentDirection.value=== "ltr"? "": "flex-row-reverse"}  items-baseline`}>
            <Logo Icon={eshLogo} />
            <div className={`flex`}>
            {siteLinks.map((item, index) => {
                
                return <Link key={index+item.name} name = {item.name} href={item.href}  isSelected={location.pathname === item.href}/>
            })}
            </div>
           
        </div> 
    );
};

export default Navigation;