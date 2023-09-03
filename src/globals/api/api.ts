import { BlogItem } from '../type';

export const getAllBlogs = async (): Promise<BlogItem[]> => {
    const res = fetch('/blog.json')
        .then((response) => {
            // Check if the response status is OK (200)
            if (response.ok) {
                // Parse the response body as JSON
                return response.json();
            } else {
                // If the response status is not OK, handle the error
                throw new Error('Request failed with status: ' + response.status);
            }
        })
        .then((data) => {
            // Handle the JSON data
            return data;
        })
        .catch((error) => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
    return res;
};
