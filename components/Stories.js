import React, {useEffect, useState} from 'react';
import faker from 'faker';
import Story from "./Story";


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
        <div className="flex space-x-2 p-6 bg-white mt-8 rounded-sm overflow-x-scroll">
            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    );
};

export default Stories;
