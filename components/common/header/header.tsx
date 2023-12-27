import TopHeader from './topHeader'
import Navbar from './navbar'
import {HeaderT} from "@/lib/types";
import {getHeader} from "@/application/header";


export default async function Header() {
    const data : HeaderT | null = await getHeader()
    return (
        <header className={'absolute z-10 w-full font-yekanBakh font-regular bg-gradient-to-b from-black-850  to-transparent group '}>
            <TopHeader/>
            <Navbar menu={data}/>
        </header>
    )
}