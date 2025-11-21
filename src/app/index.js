import dynamic from "next/dynamic";

const VirtualizedList = dynamic(() => import("../components/VirtualizedList"), {
    ssr: false,
});

export default function Home() {
    return (
        <div>
            <VirtualizedList />
        </div>
    );
}