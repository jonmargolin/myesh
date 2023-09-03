import Blog from '../components/blog/blog';
import { useBlogList } from '../globals/hooks/useFetchBlogs';
import { useTranslation } from 'react-i18next';
import { blogSignal, settingSignal } from '../globals/signal/signal-store';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { computed } from '@preact/signals-react';

//Blogs page get all blogs store the selected when in the blog signal.  

const Blogs = () => {
    const { blogList, isLoading, isError } = useBlogList();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const isMobile = computed(() => settingSignal.value.isMobile);

    const selectArticle = (blogId: number) => {
        const articleFileNames = blogList?.filter((item) => item.blogId === blogId);

        if (articleFileNames) {
            blogSignal.value.articles = articleFileNames;
            navigate('/article');
        }
    };
    const renderBlogs = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (isError) {
            return <div>Error loading blogs.</div>;
        }
        if (blogList) {
            const filteredBlogs = blogList.filter((blog) => blog.lang === i18n.language);

            if (filteredBlogs.length === 0) {
                return <div>No blogs available in this language.</div>;
            }

            // Map over the filtered blogs and render each one.
            if (filteredBlogs.length > 0) {
                return (
                    <CarouselProvider
                        naturalSlideWidth={400}
                        naturalSlideHeight={500}
                        totalSlides={filteredBlogs?.length ?? 0}
                        visibleSlides={isMobile.value ? 1 : 3}
                        orientation="horizontal"
                    >
                        <Slider className="w-full">
                            {filteredBlogs.map((blog, index) => (
                                <Slide key={index + 'im'} index={index}>
                                    <Blog key={index + blog.uuid} content={blog.blog} index={index} blogId={blog.blogId} selectBlog={selectArticle} />
                                </Slide>
                            ))}
                        </Slider>
                        <div className="flex justify-between">
                            <ButtonBack>
                                <div className="flex h-10 w-10 -rotate-180 rounded-full bg-white shadow">
                                    <ArrowRightIcon className="m-auto" />
                                </div>
                            </ButtonBack>
                            <ButtonNext>
                                <div className="flex h-10 w-10  rounded-full bg-white shadow">
                                    <ArrowRightIcon className="m-auto" />
                                </div>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                );
            }
        }
        return <div>Loading...</div>;
    };

    return <div className="flex flex-row grow shrink sm:px-2 md:px-48 pt-6">{renderBlogs()}</div>;
};

export default Blogs;
