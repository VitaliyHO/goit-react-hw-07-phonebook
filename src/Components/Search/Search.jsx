import style from './Search.module.css';
import { useDispatch } from 'react-redux';
import { setFilteredName } from '../../redux/filterSlice';


export const Search = () => {

    const dispatch = useDispatch();
    const handleSearch = (event) => {dispatch(setFilteredName(event.target.value))};

    return(
        <label className={style.label} htmlFor="">
            Find contacts by name
            <input className={style.input} onInput={handleSearch} name='filter'></input>
        </label>
    )
};
