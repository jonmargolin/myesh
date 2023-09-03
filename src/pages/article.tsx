import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import BackButton from '../ui-components/back-button';
import { useNavigate } from 'react-router-dom';
import { computed } from '@preact/signals-react';
import { useTranslation } from 'react-i18next';

import { blogSignal, settingSignal } from '../globals/signal/signal-store';
// show  blog content from the md file. select the md  file according to the language.
// when language is changed change the md file.
const Article = () => {
    const [post, setPost] = useState('');
    
    const { i18n } = useTranslation();
    const selectedArticle = computed(() =>  blogSignal.value.articles);
    const  currentDirection = computed(() => settingSignal.value.direction);
    const navigate = useNavigate();
    const navigateBack =(() => {
        navigate("/blog")
    })
    useEffect(() => {
        if( blogSignal.value.articles.length >0){
        const  file_name = selectedArticle.value.find((item ) =>  item.lang === i18n.language)?.blog.blogName
        fetch(`/${file_name}`)
            .then((response) => response.text())
            .then((text) => setPost(text))
            .catch((error) => console.error(error));
        }
    },[i18n.language]);
    
    const customComponents = {
        h1: ({ node, ...props }: any) => (
            <h1 style={{ fontWeight: '500', fontSize: '36px', fontFamily: 'PloniMedium' }}>{props.children}</h1>
        ),
        h4: ({ node, ...props }: any) => (
            <h4 style={{ fontWeight: '500', fontSize: '20px', fontFamily: 'PloniMedium' }}>{props.children}</h4>
        ),
        p: ({ node, ...props }: any) => <p style={{ marginTop: '36px', fontFamily: 'PloniMedium' }}>{props.children}</p>,
    };
    return (
        
        <div className="flex flex-col items-center" >
            <div className="md:max-w-850 sm:max-w-320" dir={`${currentDirection.value === "rtl"? "rtl": "ltr"}`}>      
            <BackButton onclick={navigateBack}/>
                <ReactMarkdown components={customComponents}>{post}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Article;


