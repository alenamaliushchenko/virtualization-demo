import React, {useState} from "react";
import List from "react-virtualized";
import { getData } from "../utils/getData";

const VirtualizedList = () => {
    const [scrollToIndex, setScrollToIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const data = getData();
    const rowRenderer = ({ key, index }) => {
        const item = data[index];
        <div key={key}>
            item.id: {item.description}
        </div>
    };
    const handleScrollNext = () => {
        setScrollToIndex( prev => Math.min(prev + 100, data.length - 1));
    };

    return (
        <div>
            <button onClick={() => setIsVisible(prev => !prev)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            <button onClick={handleScrollNext}>
                Scroll +100
            </button>

            {isVisible && (
                <List
                    width={600}
                    height={500}
                    rowCount={data.length}
                    rowHeight={25}
                    rowRenderer={rowRenderer}
                    scrollToIndex={scrollToIndex}
                />    
            )}
        </div>
    );
};
export default VirtualizedList;