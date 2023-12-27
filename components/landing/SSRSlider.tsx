"use client"
import { FC } from "react";
import { Maybe } from "@/lib/types";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { slide } from "@/lib/types";

type SSRContentT = {
    images: Maybe<Maybe<slide>[]>;
};

const SSRContent: FC<SSRContentT> = ({ images }) => {
    return (
        <div className="h-[292px] !w-full overflow-hidden lg:h-[430px]">
            {images &&
                images?.map((image, index) => (
                    <Link href={image?.link ?? ""} target="_blank" key={image?.image}>
                        <Image
                            src={image?.image ?? ""}
                            alt={image?.description ?? ""}
                            layout="fill"
                            style={{ objectFit: "cover" }}
                            priority={index === 0}
                        />
                    </Link>
                ))}
        </div>
    );
};

export default SSRContent;
