import NextImage from "next/legacy/image";
import { ImageProps } from "next/image";

interface IImage extends Omit<ImageProps, "width" | "height"> {
    layout?: "intrinsic" | "fixed" | "responsive" | "fill";
    width?: number | string;
    height?: number | string;
}

export default function Image({ layout = "intrinsic", height = 60, width = 60, ...props }:IImage){
    return (
        <NextImage unoptimized layout={layout} width={width as any} height={height as any} {...(props as any)}/>
    );
};