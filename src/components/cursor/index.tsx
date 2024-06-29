"use client"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export default function () {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const val = useMotionValue(0)
    const dashedCircleScale = useTransform(val, [0, 0.5, 1], [40, 55, 40])
    const dashedCircleOpacity = useTransform(val, [0, 0.5, 1], [1, 0.5, 1])
    useEffect(() => {
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX - 32)
            cursorY.set(e.clientY - 32)
        }
        const clickCursor = (e: any) => {
            animate(0, 1, {
                duration: 0.5,
                onUpdate: latest => val.set(latest)
            })
            animate(0, 1, {
                duration: 0.5,
                onUpdate: latest => val.set(latest)
            })
        }
        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', clickCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', clickCursor)
        }
    }, [])
    return <>
        <motion.div
            className="hidden md:flex fixed top-0 left-0 z-10 pointer-events-none h-16 w-16 items-center justify-center"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                opacity: dashedCircleOpacity
            }}>
            <motion.div className="animate-spin rounded-full bg-transparent border-dashed border border-black flex items-center justify-center"
                style={{
                    animation: "spin 7s linear infinite",
                    height: dashedCircleScale,
                    width: dashedCircleScale,
                }}>
                <div className="h-3 w-3 bg-black border border-black border-dashed rounded-full" />
            </motion.div>
        </motion.div >
    </>
}