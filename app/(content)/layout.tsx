import { ReactNode} from "react";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer";


type ScreenLayoutT = {
    children: ReactNode;
};

export default function ScreenLayout({ children }:ScreenLayoutT){

    return (
        <>
          <Header />
            <main
                className={'w-full '}>
                {children}
            </main>
          <Footer />
        </>
    );
};


