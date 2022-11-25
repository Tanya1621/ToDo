import React from 'react';
import style from './ToDoAreas.module.scss'
import Area from "../Area/Area";

export const ToDoAreas = () => {
    const todos = [
        {
            id: 1,
            message: 'Do this'
        },
        {
            id: 2,
            message: 'Do that'
        },
        {
            id: 3,
            message: 'And one more'
        }
    ]

    const inProgress = [
        {
            id: 1,
            message: 'I am doing it'
        },
        {
            id: 2,
            message: 'Still in progress'
        },
        {
            id: 3,
            message: 'One step left'
        }
    ]

    const done = [
        {
            id: 1,
            message: 'Done'
        },
        {
            id: 2,
            message: 'It was like a piece of cake'
        },
        {
            id: 3,
            message: 'We did it!'
        }
    ]

    return (
        <div className={style.wrapper}>
           <Area list={todos} name='To do'/>
            <Area list={inProgress} name='In progress'/>
            <Area list={done} name ='Done' />
        </div>
    );
}

export default ToDoAreas;