import React from 'react';
import style from './ToDoAreas.module.scss'
import Area from "../Area/Area";

export const ToDoAreas = () => {
    return (
        <div className={style.wrapper}>
           <Area  name='To do'/>
            <Area name='In progress'/>
            <Area name ='Done' />
        </div>
    );
}

export default ToDoAreas;