import BaseContainer from "@/components/common/baseContainer";
import Link from 'next/link';
import Icon from "@/components/common/Icon";

export default function TopHeader() {
    return (
        <div className={'w-full text-white py-2.5 lg:pt-3.5 lg:pb-4 border-b border-white-500 group-hover:bg-red-ehya '}>
            <BaseContainer>
                <ul className={'text-xs flex justify-end items-center divide-x divide-x-reverse divide-white-500  [&>li]:px-2 lg:[&>li]:px-4 '}>
                    <li><Link href={`#`}>
                        ویدیوهای آموزشی
                    </Link></li>
                    <li><Link href={`#`}>
                        تماس با ما
                    </Link></li>
                    <li><Link href={`#`}  className='flex  items-center gap-2 lg:gap-4'>
                        <Icon name={"globe"} color={"fill-white "} size={"w-3 h-3 lg:w-4 lg:h-4"}/>
                        انتخاب زبان
                    </Link></li>
                </ul>
            </BaseContainer>
        </div>
    )
}
