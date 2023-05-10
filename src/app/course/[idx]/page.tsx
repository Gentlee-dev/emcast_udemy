import Image from "next/image";
import logo from "public/img/logo.png";
import { CONTENTS, LEARN_LIST } from "./data";
import Arcodian from "@/Components/arcodian";
// import { ReactComponent as Require  from "Util/svg/require.svg";

const Course = () => {
  return (
    <div className="">
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <span>개발 &gt; 프로그래밍 언어 &gt; Java</span>
          <h1>한입 크기로 잘라 먹는 리액트(React.js)</h1>
          <p>
            [2022 최신 React 강의] 실전 프로젝트 감정일기를 만들며 배우는
            리액트(React)
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#b4690e] text-14">4.8</span>
            <img className="h-15" src="/img/star.png" />
            <span className="text-12 text-[#6a6f73]">(324개의 평점)</span>
            <span className="text-12 text-[#6a6f73]">1,164명의 수강생</span>
          </div>
          <div>
            <span>생성자 </span>
            <span>winterlood 이정환</span>
          </div>
          <div>
            <span>마지막 업데이트 : 2023. 1.</span>
            <span>한국어</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        <div style={{ width: "700px" }} className="">
          <section>
            <h2>배울내용</h2>
            <div className="grid grid-cols-2">
              {LEARN_LIST.map((learn: any, idx: number) => {
                return (
                  <p className="flex items-start">
                    <img
                      className="h-20 mt-4 "
                      src="/img/check.png"
                      alt="체크"
                    />
                    {learn}
                  </p>
                );
              })}
            </div>
          </section>
          <section>
            <h3>최고의 기업이 이 강의를 직원에게 제공합니다</h3>
            <p>
              이 강의는 전 세계 기업에서 신뢰하는 당사 평점 TOP 강의의 컬렉션을
              위해 선택되었습니다. 자세히 알아보기
            </p>
          </section>
          <section>
            <h2>강의 내용</h2>
            <p>8개 섹션 • 67개의 강의 • 총 길이: 17시간 2분</p>
            <Arcodian contentList={CONTENTS} />
          </section>
        </div>
      </div>
    </div>
  );
};
export default Course;
