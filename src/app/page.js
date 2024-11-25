"use client";
import { List } from "react-virtualized";
import getData from "./utils/getData";
import { useState } from "react";
import dynamic from "next/dynamic";

const Home = dynamic(
  () => {
    return Promise.resolve(() => {
      const items = getData(100000);
      const [indexToScroll, setIndexToScroll] = useState(0);
      const [isShow, setIsShow] = useState(false);

      const toogle = () => setIsShow((prev) => !prev);

      return (
        <>
          <button onClick={toogle}>{isShow ? "Hide" : "Show"}</button>
          <button onClick={() => setIndexToScroll((prev) => prev + 100)}>
            {"+100"}
          </button>
          {isShow && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <List
                width={600}
                height={500}
                rowCount={items.length}
                rowHeight={25}
                scrollToIndex={indexToScroll}
                scrollToAlignment="center"
                rowRenderer={({ index, key, style }) => {
                  const item = items[index];
                  return (
                    <p key={item.id} style={style}>
                      {item.description}
                    </p>
                  );
                }}
              />
            </div>
          )}
        </>
      );
    });
  },
  { ssr: false }
);
export default Home;
