import React, {useEffect, useState} from 'react';
import faker from 'faker';

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() =>  {
        // 🔥 on 🌛 🏃‍♂️
        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i,
            }
        ));

        setSuggestions(suggestions);
    }, []);

    return (
        <div>

        </div>
    );
};

export default Suggestions;
