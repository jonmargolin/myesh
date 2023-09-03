import { Button } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BlogLinkProps } from "../../globals/type";

const BlogLink = ({onclick}:BlogLinkProps) => {
    const { t  } = useTranslation();
    return (
        <div onClick={() => onclick()} className="flex flex-col justify-center items-center"> 
         <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1, transition: {delay: 1.5, duration: 10 } }}>
         <Text fontSize='4xl' fontFamily={"ploni"} color={"white"}>{t("homepageSubTitle")} </Text>
         </motion.div>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3.5, duration: 15 } }}>    
                    <div className="pt-3">
                    <Button borderRadius="40px" fontFamily={"ploni"} paddingInline={"3rem"} colorScheme='gray'>{t("homePageBlogButton")}</Button>
                    </div>
                    </motion.div>
            
        </div>
    );
};

export default BlogLink;