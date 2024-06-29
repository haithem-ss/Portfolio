"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link";
import { useRef } from "react";

export default function () {


    const data = [
        {
            orientation: "left",
            title: "Computer science student",
            company: "ESTIN",
            link: "https://estin.dz",
            description: "Embarked on my computer science journey @ESTIN, diving into programming, algorithms, and tech foundations.",
            mounth: "Dec",
            year: 2020,
        },
        {
            title: "Intern",
            company: "Fentechai",
            link: "https://fentech.ai",
            mounth: "Jun - Aug",
            description: "Intern at Fentech, pivotal role in Algerian Cinema Digital Archives project. Used Python (Django), Javascript (NuxtJs), and Postgresql for innovative feature development. Strengthened technical skills in a dynamic, dedicated team.",
            orientation: "right",
            year: 2023,
        },
        {
            title: "Freelancer",
            description: "Designing and implementing mobile applications and websites as a freelance professional, adding a dash of creativity to each project.",
            mounth: "Jun - now",
            orientation: "left",
            year: 2023,
        },
        {
            title: "Software developer",
            company: "Webcongress",
            link: "https://www.webcongress.com/",
            description: "As development lead, I oversee core features, contribute to scalable design, and optimize workflows for productivity and code quality.",
            mounth: "Nov - now",
            orientation: "right",
            year: 2024,
        },
    ];


    const Bubble = ({
        event: { orientation, mounth, year, title, description, company, link },
        index,
    }: {
        event: any,
        index: any
    }) => {

        const boxRef = useRef(null)
        const { scrollYProgress } = useScroll({
            target: boxRef,
            offset: ["1 1", "2.5 1"]
        })
        const opacityAnimationBubble = useTransform(scrollYProgress, [0, 0.4, 0.7, 0.9], [0, 0, 1, 1])
        const opacityAnimationTitle = useTransform(scrollYProgress, [0, 0.4, 0.75, 0.9], [0, 0, 0.7, 1])
        const opacityAnimationSub = useTransform(scrollYProgress, [0, 0.4, 0.8, 0.9], [0, 0, 0.7, 1])

        return (
            <motion.div
                ref={boxRef}

                style={{
                    opacity: opacityAnimationBubble
                }}
                className={cn(
                    orientation === "right",
                    "flex flex-col items-center sm:grid grid-cols-9 grid-rows-1 gap-4 sm:gap-20 md:gap-6 mt-12 sm:mt-0"
                )}
            >
                <div className="h-full col-start-5 col-span-1 row-start-1 flex flex-col items-center justify-end">
                    {index != 0 && (
                        <div
                            className={cn(
                                "w-1 h-[calc(100%-5rem)] hidden sm:block bg-primary"
                            )}
                        />
                    )}
                    <div className="h-20 text-xs aspect-square  bg-primary rounded-full text-white flex flex-col items-center justify-center gap-1">
                        <div
                            className="opacity-1 flex flex-col items-center justify-center gap-1"
                        >
                            <span>{mounth}</span>
                            <span className="font-bold">{year}</span>
                        </div>
                    </div>
                </div>
                <div
                    className={cn(
                        orientation === "left"
                            ? "col-start-6 col-span-4 row-span-1"
                            : "col-start-1 col-span-4 row-span-1",
                        "w-full flex flex-col gap-6 items-center sm:items-end justify-center z-10 sm:mt-12"
                    )}
                >
                    <div
                        className={cn(
                            orientation === "left"
                                ? "text-center sm:text-start"
                                : "text-center sm:text-end"
                        )}
                    >
                        <motion.div style={{
                            opacity: opacityAnimationTitle
                        }}>
                            <h5 className="text-slate-800 text-base font-bold">{title} {company &&
                                <Link href={link}  legacyBehavior>
                                    <a target="_blank" className="hover:underline transition-all">
                                        {`@${company}`}
                                    </a>
                                </Link>
                            }</h5>
                        </motion.div>
                        <motion.div className="opacity-1"
                            style={{
                                opacity: opacityAnimationSub
                            }} >
                            <p className="text-slate-500 text-base ">{description} </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        );
    };
    return (<>

        <div
            className="h-fit flex flex-col items-center justify-center f px-4 sm:px-20 lg:px-40 max-w-[2000px] space-y-5 m-auto">

            <div id="Timeline" className="text-center space-y-4 py-5">
                <h3 className="font-bold text-4xl">
                    Journey Through Innovation
                </h3>
                <p>
                    Unveiling the Evolution of My Creative Odyssey in Web and Mobile Development
                </p>
            </div>
            <div className="relative overflow-hidden">
                <div className="">
                    {data.map((event, index) => {
                        return (
                            <>
                                <Bubble event={event} index={index} />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    </>
    );
}
