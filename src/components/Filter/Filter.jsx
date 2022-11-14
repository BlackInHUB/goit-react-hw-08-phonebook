import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "redux/filter/filterSelectors"
import { setFilter } from "redux/filter/filterSlice"
import { FilterInput } from "./Filter.styled"

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

        const handleChange = (e) => {
        const { value } = e.target;
        const action = setFilter(value);
        dispatch(action)
}

    return <FilterInput type="text" value={filter} onChange={handleChange} placeholder="Filter?" />
}