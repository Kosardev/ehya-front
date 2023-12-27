import cn from "classnames";
import { forwardRef } from "react";
import Icon from "../Icon";
import { ClassName } from "@/lib/types";
import SwiperLeftArrow from "@/components/common/Swiper/SwiperLeftArrow";
type SwiperRightArrowNewT = {
    className?:ClassName
}
const SwiperRightArrowNew = forwardRef(({className}:SwiperRightArrowNewT , ref) => {
    return <div className={cn(`prev-button-swiper-new` , className)} ref={ref as any}>
        {/*<Icon name="arrow-large-right" size="w-8 h-8"/>*/}
    </div>;
});
SwiperRightArrowNew.displayName = "SwiperRightArrowNew";

export default SwiperRightArrowNew;
