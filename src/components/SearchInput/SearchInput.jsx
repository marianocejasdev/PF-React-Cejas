const SearchInput = () => {

    return (
        <form action="#" className='flex items-center border-2 border-yellow-500 bg-transparent	rounded-full py-2 px-5'>
            <input autoComplete="off" type="text" name='search' placeholder='Buscar..' className='bg-transparent text-white border-none outline-none text-md' />
            <button type="submit">
                <i className="fa-solid fa-magnifying-glass text-yellow-400"></i>
            </button>
        </form>
    )
}

export default SearchInput;