import Dashboard from "./thong-ke/page";
import dynamic from "next/dynamic";
// const Dashboard = dynamic(() =>
//   import("./thong-ke/page").then((mod) => mod.Dashboard)
// );

const DashboardPage = () => <Dashboard />;

export default DashboardPage;
