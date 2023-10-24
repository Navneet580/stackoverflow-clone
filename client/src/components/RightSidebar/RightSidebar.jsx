
import React from 'react';

import './RightSidebar.css';
import Widget from './Widget';
import WidgetTags from './WidgetTags';

const RightSidebar = () => {
    return (
        <aside className='right-sidebar' style={{marginTop: "60px", marginRight: "24px"}} >
            <Widget />
            <WidgetTags />
        </aside>
    )
}

export default RightSidebar
