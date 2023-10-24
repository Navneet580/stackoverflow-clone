
import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import QuestionsDetils from './QuestionsDetails';

const DisplayQuestion = () => {
    return (
        <div>
            <div className='home-container-1'>
                <LeftSidebar />
                <div className='home-container-2'>
                    <QuestionsDetils />
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default DisplayQuestion
