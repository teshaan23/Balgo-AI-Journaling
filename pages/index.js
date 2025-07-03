import dynamic from 'next/dynamic';
const Dashboard = dynamic(() => import('../components/TradingJournalDashboard'), { ssr: false });
export default function Home() { return <Dashboard />; }