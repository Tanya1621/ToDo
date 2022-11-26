import React, {createRef, useState} from 'react';
import Action from "../Action/Action";
import style from "./Area.module.scss";
import {v4 as uuidv4} from 'uuid';
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addAction, clearBoard} from "../../services/slice";
import {deleteAction} from "../../services/slice";
import addButton from '../../img/icons8-close.svg'


function Area({name}) {
    const [activeInput, setActive] = useState(false);
    const input = createRef();
    const dispatch = useDispatch();
    const allItems = useSelector(store => store.todo.actions);
    const items = allItems.filter(el => el.board === name);


    const [{isHover}, dropRef] = useDrop({
        accept: 'action',
        drop(item) {
            dispatch(deleteAction({...item.id}))
            dispatch(addAction({...item.id, board: name}))
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    })


    function onSubmit(e) {
        e.preventDefault();
        dispatch(addAction({id: uuidv4(), message: input.current.value, board: name}))
        input.current.value = '';
        setActive(false);
    }

    function deleteItem(id) {
        const deletedItem = items.filter(el => el.id === id);
        dispatch(deleteAction(deletedItem[0]));
    }

    function deleteAll() {
        dispatch(clearBoard(name))
    }

    function addNewAction() {
        setActive(true);
    }

    function cancel() {
        setActive(false);
    }

    return (
        <div className={style.area__wrapper}>
            <div className={style.area} ref={dropRef} style={isHover? {border: 'solid #12c2e9 2px'} : null}>
                <h2 className={style.area__heading}>{name}</h2>
                <div className={style.area__content}>
                    {activeInput && <form onSubmit={onSubmit} className={style.form}>
                        <input type='text' id={name} ref={input} className={style.form__input}/>
                        <button type="submit" className={style.form__submit}>Yes</button>
                        <button onClick={cancel} className={style.form__cancel}>No</button>
                    </form>}
                    {items.map((el, index) => {
                        return <Action item={el} key={el.id} deleteItem={deleteItem} index={index}></Action>
                    })}
                </div>
                {items.length !== 0 && <button onClick={deleteAll} className={style.area__clear}>Clear</button>}
                <img className={style.area__add} src={addButton} onClick={addNewAction}/>
            </div>
        </div>
    );
}

export default Area;