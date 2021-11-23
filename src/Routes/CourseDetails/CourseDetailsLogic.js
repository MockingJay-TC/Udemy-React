import React from 'react';
import Company from '../../Components/Companies/Company';
import Jambotron from '../../Components/Jambotron/Jambotron';
import Learn from '../../Components/Learn/Learn';

const CourseDetailsLogic = () => {

    return (
        <div className="my__course__details">
            <Jambotron/>
            <Learn/>
            <Company/>
        </div>
    )
}

export default CourseDetailsLogic
