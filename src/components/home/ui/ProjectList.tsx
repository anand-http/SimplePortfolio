"use client";

import { createRef } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  

  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
      >
        {projects.map((item, index) => {
          return <ProjectItem key={`project-item-${index}`} project={item} />;
        })}
      </Row>

      {
        projects.length >= 3 &&
        <Row classNames="w-full items-center justify-center gap-4 mt-16">
          <button
            type="button"
            className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
            onClick={_handleOnClickPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z"/></svg>
          </button>

          <button
            type="button"
            className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
            onClick={_handleOnClickNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
          </button>
        </Row>
      }
    </Column>
  );
};

export default ProjectList;
