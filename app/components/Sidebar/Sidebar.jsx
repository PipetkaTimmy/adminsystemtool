import React from "react";
import { Link } from "@heroui/react";

import { Books } from "@/public/sidebar/books";
import { Line } from "@/public/sidebar/line";
import { Plans } from "@/public/sidebar/plans";
import { Settings } from "@/public/sidebar/settings";
import { Stat } from "@/public/sidebar/stat";
import { Struct } from "@/public/sidebar/struct";

import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sidebarWrapper">
            <div className="sidebar">
                <div className="brand">
                    <img src="/brand/logo.svg" alt="" />
                    ESTA
                </div>
                <div className="navElements">
                    <Link
                        href="/structure"
                        className={`navElement ${pathname === "/structure" ? "navElementActive" : ""
                            }`}
                    >
                        <div className="linkImg">
                            <Struct fill={pathname === "/structure" ? "#FFFFFF" : "#7B7B7B"} />
                        </div>
                        Структура
                    </Link>
                    <Link
                        href="/production"
                        className={`navElement ${pathname === "/production" ? "navElementActive" : ""
                            }`}
                    >
                        <div className="linkImg">
                            <Line fill={pathname === "/production" ? "#FFFFFF" : "#7B7B7B"} />
                        </div>
                        Линия производства
                    </Link>
                    <Link
                        href="/production"
                        className={`navElement ${pathname === "/statistics" ? "navElementActive" : ""
                            }`}
                    >
                        <div className="linkImg">
                            <Stat fill={pathname === "/statistics" ? "#FFFFFF" : "#7B7B7B"} />
                        </div>
                        Статистика
                    </Link>
                    <Link
                        href="/production"
                        className={`navElement ${pathname === "/plans" ? "navElementActive" : ""
                            }`}
                    >
                        <div className="linkImg">
                            <Plans fill={pathname === "/plans" ? "#FFFFFF" : "#7B7B7B"} />
                        </div>
                        Боевые планы
                    </Link>
                    <Link
                        href="/production"
                        className={`navElement ${pathname === "/base" ? "navElementActive" : ""
                            }`}
                    >
                        <div className="linkImg">
                            <Books fill={pathname === "/base" ? "#FFFFFF" : "#7B7B7B"} />
                        </div>
                        База знаний
                    </Link>
                    <Link
                        href="/production"
                        className={`navElement ${pathname === "/settings" ? "navElementActive" : ""
                            }`}
                    >
                        <div className="linkImg">
                            <Settings fill={pathname === "/settings" ? "#FFFFFF" : "#7B7B7B"} />
                        </div>
                        Настройки
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
