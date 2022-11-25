import style from './Action.module.scss';
import deleteButton from '../../img/icons8-close.svg'

import React from 'react';
import {useDrag} from "react-dnd";

const Action = ({item, deleteItem, index}) => {
    const id = item;
    const [,dragRef] = useDrag({
        type: 'action',
        item: {id}}
    )

    return (
        <div ref={dragRef} className={style.action}>
            <p>{index + 1}. {item.message}</p>
            <img src={deleteButton} onClick={() => deleteItem(item.id)} className={style.action__button}/>
        </div>
    );
};

export default Action;