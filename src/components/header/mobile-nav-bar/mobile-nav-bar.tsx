import { computed } from "@preact/signals-react";
import { settingSignal } from "../../../globals/signal/signal-store";
import EsMenu from "../../../ui-components/menu";
import { EsMenuOptionsProps, RouterOptions } from "../../../ui-components/types";
import { HamburgerIcon  } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const MobileNavBar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const  currentDirection = computed(() => settingSignal.value.direction);
    const changRoute =((value: string) => {
        navigate(value)
    })
     const  routerOption:  EsMenuOptionsProps[] =[{
        value:"/home",  text:t("home"),onClick: changRoute
     },
    {
        value: "/blog", text: t("blog"), onClick: changRoute
    }]
    return (
        <div className={`flex-grow flex ${currentDirection.value === 'rtl'? "justify-end": ""}`}>
            < EsMenu Icon={ <HamburgerIcon/>} defaultValue={RouterOptions.home} options={routerOption} />
        </div>
    );
};

export default MobileNavBar;