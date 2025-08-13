import LoadingBar from "react-top-loading-bar";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRef } from "react";

const LoadingBarComponent = () => {

    const ref = useRef(null);
    const isRouteLoading = useSelector((state) => state.route.isRouteLoading)
    const routeColor = useSelector((state) => state.route.routeColor)

    useEffect(() => {
        if (isRouteLoading) {
            ref.current.continuousStart()
        }
        else {
            ref.current.complete()
        }
    }, [isRouteLoading, routeColor])
    
    return (
        <div>
            <LoadingBar color={routeColor} ref={ref} />
        </div>
    )
} 

export default LoadingBarComponent