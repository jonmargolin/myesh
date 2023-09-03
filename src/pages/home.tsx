import { computed } from '@preact/signals-react';
import { desktopVideoUrl, mobileVideoUrl } from '../globals/const';
import { settingSignal } from '../globals/signal/signal-store';
import BlogLink from '../components/home-parts/blog-link';
import { useNavigate } from 'react-router-dom';

//home page set video url according to setting signal is mobile or desktop

const Home = () => {
    const isMobile = computed(() => settingSignal.value.isMobile);
    const navigate = useNavigate();
    const navigateToBlog = () => {
        navigate('/blog');
    };
    return (
        <div className="flex  flex-grow flex-shrink flex-col items-center justify-end">
            <div className="z-1- absolute top-0 left-0 overflow-hidden h-screen">
                <video src={isMobile.value ? mobileVideoUrl : desktopVideoUrl} loop autoPlay muted></video>
            </div>
            <BlogLink onclick={navigateToBlog} />
        </div>
    );
};

export default Home;
