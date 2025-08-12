import { useEffect, useState } from 'react';

const useRepositories = () => {

    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
        
        setLoading(true);

        const url = 'http://localhost:5001/api/repositories';

        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();

            console.log('Repositories ', result.edges);

            setRepositories(result);
            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect( () => {

        fetchRepositories();
    }, []);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;