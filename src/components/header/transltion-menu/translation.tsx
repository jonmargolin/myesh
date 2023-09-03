
import { computed } from '@preact/signals-react';
import { settingSignal } from '../../../globals/signal/signal-store';
import EsMenu from '../../../ui-components/menu';
import { EsMenuOptionsProps, TranslationsLanguage } from '../../../ui-components/types';
import {ReactComponent as Globes} from './../../../assets/globes.svg'
import { useTranslation } from 'react-i18next';
import { TranslationMenuProps } from '../types';
const Translation = ({changeDirection}: TranslationMenuProps) => {
  const  currentDirection = computed(() => settingSignal.value.direction);
  const { i18n } = useTranslation();
  const  changeLanguage =((value: string, direction:"ltr" |"rtl") => {
    i18n.changeLanguage(value)
    changeDirection(direction)
  })
  const translationOptions: EsMenuOptionsProps[] =  [{
    text:"עברית",
    value:"he",
    direction:"rtl",
    onClick :changeLanguage
  }, {
    text:"English",
    value:"en",
    direction:"ltr",
    onClick: changeLanguage
  }]
  return (
        <div className={`${currentDirection.value === "ltr"? "": "grow"}`}>
< EsMenu Icon={ <Globes />} defaultValue={TranslationsLanguage.en} options={translationOptions} />
        </div>
    );
};

export default Translation;