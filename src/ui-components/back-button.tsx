import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BackButtonProps } from './types';
import { useTranslation } from 'react-i18next';
import { computed } from '@preact/signals-react';
import { settingSignal } from '../globals/signal/signal-store';

const BackButton = ({ onclick }: BackButtonProps) => {
    const { t } = useTranslation();
    const currentDirection = computed(() => settingSignal.value.direction);
    return (
        <div onClick={onclick} className={`flex hover:cursor-pointer  font-ploni flex-row-reverse justify-end`}>
            <span> {t('backBtn')}</span>
            <div>
                <ChevronLeftIcon className={`${currentDirection.value === 'rtl' ? 'rotate-180' : ''}`} />
            </div>
        </div>
    );
};

export default BackButton;
