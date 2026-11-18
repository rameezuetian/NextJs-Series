import UserAnalytics from "path/to/UserAnalytics";
import RevenueMetrics from "path/to/RevenueMetrics";
import Notifications from "path/to/Notification";
import { RenderError } from "next/dist/next-devtools/dev-overlay/container/runtime-error/render-error";


export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notification,
}:{
    children : React.ReactNode;
    users : React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;
}){
    return (
        <>
        <div>{children}</div>
        <UserAnalytics />
        <RevenueMetrics />
        <Notifications />
        </>
    )
}