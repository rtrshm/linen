import React from 'react';

interface Props {
    module_name: string,
    module_course: string 
}

export const ModuleEntry: React.FC<Props> = (props) => {
    return (
        <div>
            <ul>
                <li> {props.module_name} </li>
                <li> {props.module_course}</li>   
            </ul>
        </div>
    );
};