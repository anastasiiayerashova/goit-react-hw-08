import s from './SearchBox.module.css'
import { useId } from 'react';
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    const dispatch = useDispatch()
    const findId = useId();

    const handleChangeFilters = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <div className={s.findDiv}>
            <label htmlFor={findId} className={s.label}>Find contacts by name<FiSearch color='#14C57C'/></label>
            <input type='text' name='findName' id={findId} className={s.input} onChange={handleChangeFilters}></input>
        </div>
    )
}