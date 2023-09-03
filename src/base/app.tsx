import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '../chakra-config';
import Header from '../components/header/header';
import { settingSignal } from '../globals/signal/signal-store';
import i18n from '../i18n';
import Router from './router';
import Footer from '../components/footer';

const queryClient = new QueryClient();
settingSignal.value.isMobile = window.innerWidth <= 768;

function App() {
    return (
        <ChakraBaseProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <I18nextProvider i18n={i18n}>
                    <div className="sm:py-4 sm:px:4  md:py-8  md:px-20 h-screen flex flex-col">
                        <BrowserRouter>
                            <Header />
                            <Router />
                        </BrowserRouter>
                        <Footer />
                    </div>
                </I18nextProvider>
            </QueryClientProvider>
        </ChakraBaseProvider>
    );
}

export default App;
