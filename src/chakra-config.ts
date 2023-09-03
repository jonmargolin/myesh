import { extendTheme } from '@chakra-ui/react';
import { menuAnatomy, modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);
const modalStyle = createMultiStyleConfigHelpers(parts.keys);
// define the base component styles

const baseStyle = definePartsStyle({
    // define the part you're going to style
    button: {
        // this will style the MenuButton component
        display: 'block',
        justifyContent: 'space-between',
        fontWeight: 'medium',
        bg: 'gray.50',
        color: 'gray.500',
        _hover: {
            bg: 'gray.100',
            color: 'white',
        },
    },
    list: {
        // this will style the MenuList component
        py: '0',
        pt: '1',
        maxW: '150px',
        minW: '150px',
        borderRadius: 'md',
        border: 'none',
        bg: 'gray.50',
    },
    item: {
        // this will style the MenuItem and MenuItemOption components
        borderRadius: 'md',
        color: 'black',
        justifyContent: 'space-between',
        _hover: {
            bg: 'gray.100',
        },
        _focus: {
            bg: 'gray.300',
        },
    },
    groupTitle: {
        // this will style the text defined by the title prop
        // in the MenuGroup and MenuOptionGroup components
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 'wider',
        opacity: '0.7',
    },
    command: {
        // this will style the text defined by the command
        // prop in the MenuItem and MenuItemOption components
        opacity: '0.8',
        fontFamily: 'mono',
        fontSize: 'sm',
        letterSpacing: 'tighter',
        pl: '4',
    },
    divider: {
        // this will style the MenuDivider component
        borderColor: 'gray.200',
        borderBottom: '2px dotted',
    },
});
// export the base styles in the component theme
const variants = {
    smallContext: {
        list: {
            width: 'fit-content',
            maxW: 'unset',
            minW: 'unset',
        },
    },
};

// export the custom variants in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle, variants });

const modalOverlay = modalStyle.definePartsStyle({
    // define the part you're going to style
    overlay: {
        bg: 'blackAlpha.200', //change the background
    },
    dialog: {
        borderRadius: 'md',
        overflowY: 'auto',
    },
});
const modalLargeSize = modalStyle.definePartsStyle({
    // define the part you're going to style
    overlay: {
        bg: 'blackAlpha.200', //change the background
    },
    dialog: {
        borderRadius: 'md',
        maxHeight: 'calc(100vh - 20px)',
        minHeight: 'calc(100vh - 120px)',
        minWidth: 'calc(100vw - 50px)',
        overflowX: 'hidden',
    },
});
export const modalTheme = modalStyle.defineMultiStyleConfig({
    baseStyle: modalOverlay,
    variants: { modalLargeSize },
});
export const theme = extendTheme();
