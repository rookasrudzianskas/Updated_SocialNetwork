import React, {useEffect, useState} from 'react';
import faker from 'faker';


const Stories = () => {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() =>  {
    //    this will 🔥 then component loads
        const suggestions = [...Array(20)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i,
            }
        ));

        setSuggestions(suggestions);
        // console.log(suggestions);
    }, []);

    return (
        <div>

        </div>
    );
};

export default Stories;
