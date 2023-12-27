import cn from "classnames";
import { forwardRef } from "react";
import Icon from "../Icon";
import { ClassName } from "@/lib/types";

type SwiperLeftArrowNewT = {
    className?:ClassName
};
const SwiperLeftArrowNew =forwardRef(({className}:SwiperLeftArrowNewT ,ref) => {
    return <div className={cn(`next-button-swiper-new` , className)} ref={ref as any}>
        {/*<Icon name="arrow-large-left" size="w-8 h-8"/>*/}
    </div>;
});
SwiperLeftArrowNew.displayName = "SwiperLeftArrowNew";
export default SwiperLeftArrowNew;
