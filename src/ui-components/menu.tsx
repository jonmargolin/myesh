import { Menu, MenuButton, IconButton, MenuList, MenuOptionGroup, MenuItemOption, } from '@chakra-ui/react';
import { EsMenuProps } from './types';
import { ReactElement, JSXElementConstructor } from 'react';

//menu  component with logo for
const EsMenu = ({Icon, options, defaultValue}:EsMenuProps) => {
    const  menuOptions = options.map((item, index ) => {
  return  <MenuItemOption key={`${item.value}${index}`} onClick={() => item.onClick(item.value, item.direction)} value={item.value}>{item.text}</MenuItemOption>
    })
    return (
        <Menu>
        <MenuButton 
          as={IconButton}
          background={"none"}
          aria-label='Options'
          icon={Icon  as ReactElement<any, string | JSXElementConstructor<any>>}
        />
        <MenuList>
          <MenuOptionGroup  defaultValue={defaultValue} type='radio'>
            {menuOptions}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    );
};

export default EsMenu;