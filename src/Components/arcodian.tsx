"use client";

import { Content, ContentCourse } from "@/interface";
import RotateElement from "./rotateElement";
import { useState, useEffect } from "react";

const MenuComp = ({ content }: { content: Content }) => {
  const [isOpen, setIsOpen] = useState(false); // 오픈 여부 boolean

  return (
    <div className="mb-24">
      <button
        onClick={() => setIsOpen((spread) => !spread)}
        style={{
          width: "100%",
        }}
        className="flex items-center justify-between w-full bg-[#000]"
      >
        <img className="h-20" src="/img/arrow.png" />
        <div className="flex items-center">
          <h1 className="ml-12 font-bold text-fbf9f9">{content.title}</h1>
        </div>
      </button>
      {isOpen && (
        <ul className="mt-20 ml-36 mb-30 text-969696">
          {content.courses.map((child: ContentCourse) => {
            return <li key={`${child.title}`}>{child.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
const Arcodian = ({ contentList }: { contentList: Content[] }) => {
  return (
    <div id="sidebar" className="p-24  bg-primary w-230 h-[calc(100vh-56px)]">
      {contentList.map((content: Content) => {
        return <MenuComp content={content} />;
      })}
    </div>
  );
};

export default Arcodian;
