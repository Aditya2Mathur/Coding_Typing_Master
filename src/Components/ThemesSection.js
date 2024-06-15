import React from "react";
import ThemeButton from "../Components/ThemeButton";

export function ThemesSection({}) {
  return (
    <>
      <div className=" my-20">
        <h1 className=" text-4xl my-8">Themes</h1>
        <div className=" grid grid-cols-4 gap-10">
          <ThemeButton label="Default" themeClassName="normal-theme" />
          <ThemeButton label="Theme 1" themeClassName="theme-skullemoji" />
          <ThemeButton label="Theme 2" themeClassName="theme-quoteleaf" />
          <ThemeButton label="Theme 3" themeClassName="theme-dimmed" />
          {/* <ThemeButton label="Dark" themeClassName="theme-dark" /> */}
        </div>
      </div>
    </>
  );
}
