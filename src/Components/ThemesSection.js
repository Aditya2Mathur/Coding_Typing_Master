import React from "react";
import ThemeButton from "../Components/ThemeButton";

export function ThemesSection({}) {
  return (
    <>
      <div className="my-10">
        <h1 className="my-4 lg:text-4xl sm:text-2xl">Themes</h1>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5">
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
