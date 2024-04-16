import SearchInput from './search'
import Conversations from './conversations'
import LogoutButton from './logout'


export default function Sidebar(){

    return(
        <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
    </div>

    )
}