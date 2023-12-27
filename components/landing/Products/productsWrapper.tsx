'use client'
import {useRef,useState,useEffect} from 'react'
import {bookmarkedProduct} from '@/lib/types'
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";
import Product from "@/components/landing/Products/product";
import Button from "@/components/common/button";
import Icon from "@/components/common/Icon";
import className from "classnames";



type LandingProductsWrapperT = {
    products?: bookmarkedProduct[];
};

export default function ProductsWrapper({ products }:LandingProductsWrapperT){
    let chunkedProducts = [];
    for (let i = 0; i < Number(products?.length); i += 2) {
        chunkedProducts.push(products?.slice(i, i + 2));
    }

    const containerRef = useRef(null);
    const [isEnd,setEnd] = useState<boolean>(false);

    const scrollToRight = () => {
        const containerElement = containerRef.current as HTMLElement | null;

        if (containerElement) {
            const lastChild = containerElement?.lastElementChild as HTMLElement | null;
            if (lastChild) {
                lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    };
    const scrollToLeft = () => {
        const containerElement = containerRef.current as HTMLElement | null;

        if (containerElement) {
            const firstChild = containerElement?.firstElementChild  as HTMLElement | null;
            if (firstChild) {
                firstChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

   {/*useEffect(()=>{*/}
   //      if (containerRef.current) {
   //          console.log("scrollToRight>>>",containerRef.current.scrollWidth)
   {/*         if(isEnd){*/}
   {/*             // containerRef.current.scrollLeft = 0;*/}
   //              const firstChild = containerRef.current.firstElementChild;
   //              if (firstChild) {
   //                  console.log("firstChild>>>",firstChild)
   //                  firstChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
   //              }
   //          }else{
   //              const lastChild = containerRef.current.lastElementChild;
   //              if (lastChild) {
   //                  console.log("lastChild>>>",lastChild)
   //                  lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
   //              }
   //          }
   //      }
   //  },[ isEnd])

    return (
        <section className={'w-full pt-16 pr-12 4xl:pt-32 4xl:pr-64 flex gap-10 4xl:gap-20 overflow-hidden'}>
            <div className={'w-[58%]'}>
                <SubTitle title={'محصولات و خدمات'} icon={'plus'}/>
                <Title title={'شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه  های درمانی '} className={'!max-w-[80%]'}/>
                <p className={'text-gray-79 leading-8 font-yekanBakh font-regular'}>
                    شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و دستگاه های ماشین بیهوشی، تنها تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و همچنین تولید کننده دستگاه CT Scan در ایران می باشد.
                </p>
                <p className={'text-gray-79 leading-8 font-yekanBakh font-regular'}> شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و دستگاه های ماشین بیهوشی، تنها تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و همچنین تولید کننده دستگاه CT Scan در ایران می باشد.
                </p>
                <Button fill={'fill'} size={'lg'} className={'px-9 mt-10'}>نمایش همه</Button>

            </div>
            <div  className={'grow overflow-hidden relative'}  >
                <div className={'!w-fit flex gap-4 2xl:gap-10  overflow-x-auto hidden-scroll '} ref={containerRef}>
                    {chunkedProducts?.map((chunk,key)=><div key={key} className='flex w-[600px] flex-col gap-4 2xl:gap-10 '>
                        {chunk?.map((product,index)=><Product key={index} product={product} className={{ container:index%2?" flex-row-reverse ":"", desc: index%2?" rounded-r-lg ":" rounded-l-lg " }}/>)}
                    </div>)}
                    <div className=' w-12 4xl:w-64 h-full'/>
                </div>
                <Button className={className('absolute top-1/2 left-[20%] -translate-y-1/2 !h-fit group hover:!bg-red-ehya',)} size='xl' onClick={scrollToRight} >
                    <Icon name={'arrowPrev2'} color={'fill-red-ehya group-hover:fill-white'} size={'w-10 h-10 3xl:w-16 3xl:h-16'}/>
                </Button>
                <Button className={className('absolute top-1/2 !left-[-60%] -translate-y-1/2 !h-fit group hover:!bg-red-ehya',)} size='xl' onClick={scrollToLeft} >
                    <Icon name={'ArrowRight'} color={'fill-red-ehya group-hover:fill-white'} size={'w-10 h-10 3xl:w-16 3xl:h-16'}/>
                </Button>
            </div>
        </section>
    );
};


