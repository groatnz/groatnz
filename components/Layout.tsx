import React, { useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import throttle from "lodash.throttle";
import styled from "styled-components";
import { AppContext } from "../lib/context";
import constants from "./constants";
import Meta from "./Meta";
import ServiceWorker from "./ServiceWorker";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    overflow: visible;
    display: flex;

    transition: left 0.3s;
    @media (max-width: ${constants.mobile}px) {
        width: auto;
        left: -75vw;
        &.menu {
            left: 0;
        }
    }
`;

const SidebarWrapper = styled.div`
    width: ${constants.sidebarWidth}px;
    -webkit-overflow-scrolling: touch;
    @media (max-width: ${constants.mobile}px) {
        width: 75vw;
    }
`;

const BodyColumn = styled.div`
    flex: 1;
    position: relative;
    @media (max-width: ${constants.mobile}px) {
        width: 100vw;
    }
`;

const MainWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 20px;
    padding-top: 60px; /* Header height + padding */
    display: flex;
    flex-direction: column;
    background-color: #fffff8;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23809080' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-attachment: scroll;
` 

const Main = styled.main`
    flex: 1;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
`;

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`;

interface LayoutProps {
    children: React.ReactChild;
}

const Layout = (props: LayoutProps): React.ReactElement => {
    const { state, dispatch } = useContext(AppContext);
    const bodyEl = useRef<HTMLDivElement>(null);

    const defer = (callback: () => void): void => {
        const w = (window as any); // eslint-disable-line
        w.requestIdleCallback
            ? w.requestIdleCallback(callback)
            : setTimeout(callback, 1);
    };

    // Scroll to top on route change
    const router = useRouter();
    useEffect(() => {
        defer(() => {
            const body = bodyEl.current;
            if (body) {
                body.scrollTop = 0;
            }
        });
    }, [router]);

    // Hide header on top
    const watchScroll = throttle(() => {
        const body = bodyEl.current;
        if (body) {
            if (body.scrollTop > 100) {
                dispatch({ type: "showHeader" });
            } else {
                dispatch({ type: "hideHeader" });
            }
        }
    }, 50);

    useEffect(() => {
        defer(() => {
            const body = bodyEl.current;
            if (body) {
                body.addEventListener("scroll", watchScroll);
                watchScroll();
            }
        });

        return () => {
            const body = bodyEl.current;
            body && body.removeEventListener("scroll", watchScroll);
        };
    }, []);

    const sc = state.isMenuVisible ? "menu" : "";

    return (
        <div>
            <Meta />
            <ServiceWorker />
            <Wrapper className={sc}>
                <SidebarWrapper className={sc}>
                    <Sidebar />
                </SidebarWrapper>
                <BodyColumn>
                    <HeaderWrapper>
                        <Header />
                    </HeaderWrapper>
                    <MainWrapper ref={bodyEl} className="body">
                        <Main>{props.children}</Main>
                        <Footer />
                    </MainWrapper>
                </BodyColumn>
            </Wrapper>
        </div>
    );
};

export default Layout;
