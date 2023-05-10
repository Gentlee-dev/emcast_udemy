"use client";

import { useEffect } from "react";
import COURSELIST from "./data";
import { Course } from "@/interface";
import Link from "next/link";

const Index = () => {
  useEffect(() => {
    console.log(COURSELIST);
  }, []);

  return (
    <div className="">
      <ul className="max-w-5xl mx-auto">
        {COURSELIST.map((course: Course) => {
          return (
            <li key={course.title} className="py-16 relative">
              <Link href={``}>
                <section className="flex">
                  <img
                    className="w-260 mr-16"
                    src={course.image_240x135}
                    alt={course.title}
                  />
                  <div className="flex-[1] pr-96">
                    <h2 className="font-bold">{course.title}</h2>
                    <p className="font-thin text-15 my-4">{course.headline}</p>
                    <span className="text-12 text-[#6a6f73]">
                      {course.visible_instructors.join(" ")}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-[#b4690e] text-14">
                        {course.rating}
                      </span>
                      <img
                        className="h-15"
                        src="/img/star.png"
                        alt={course.title}
                      />
                      <span className="text-12 text-[#6a6f73]">
                        ({course.num_reviews})
                      </span>
                    </div>
                    <div>
                      <span className="text-12 text-[#6a6f73]">
                        {course.content_info}
                      </span>
                      <span className="text-12 text-[#6a6f73]">
                        {course.num_published_lectures}시간
                      </span>
                      <span className="text-12 text-[#6a6f73]">
                        {course.instructional_level}
                      </span>
                    </div>
                    <span>{course.badge_text}</span>
                  </div>
                  <div className="absolute right-0 text-right">
                    <p>₩{course.price.toLocaleString()}</p>
                    {course?.real_price && (
                      <s className="text-[#6a6f73] text-14">
                        ₩{course.real_price.toLocaleString()}
                      </s>
                    )}
                  </div>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;
