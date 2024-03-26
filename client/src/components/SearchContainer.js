import {FormRow , FormRowSelect} from '.';
import {useAppContext} from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';
const SearchContainer = () =>{
    const {isLoading,
        search,
        sort,
        sortOptions,
        handleChange,
        clearFilters,
        }=useAppContext()
        const handleSearch= (e)=>{
            if(isLoading)
            return;
            handleChange({name:e.target.name,value:e.target.value})
        }
    return (
       <Wrapper>
        <form className='form'>
            <h4>Search Jobs</h4>
            <div className='form-center'>
            {/* search position */}
                <FormRow
                type='text'
                name='search'
                value={search}
                handleChange={handleSearch}>
                </FormRow>

                <FormRow
                type='select'
                name='sort'
                value={sort}
                handleChange={handleSearch}
                list={sortOptions} />
            </div>
        </form>
       </Wrapper>
    )
}

export default SearchContainer