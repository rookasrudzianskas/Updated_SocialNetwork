import React from 'react';
import Stories from "./Stories";

const Feed = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        {/*    section  */}
            <section>
                <Stories />
            </section>

            <section>

            </section>
        </div>
    );
};

export default Feed;
