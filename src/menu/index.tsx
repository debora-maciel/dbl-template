import { useNavigate } from "react-router-dom";
import { menu } from "../data/menu";

export default function SideMenu() {
  const navigate = useNavigate();

  function handleNavigate(link?: string) {
    if (link) navigate(link);
  }

  return (
    <div className="bg-primary shadow-secondary text-left px-4 pt-2 flex-col w-[300px] lg:w-[300px]">
      <h1 className="">DBL React</h1>
      {menu.map((item, index) =>
        item.type === "divider" ? (
          <hr className="mt-4 mb-2 text-secondary" />
        ) : (
          <div
            className={`cursor-pointer ${
              item.type === "item"
                ? "text-secondary text-sm"
                : item.type === "title"
                ? "text-primary-text"
                : item.type === "category"
                ? "text-xs text-secondary p-1"
                : "text-secondary-text text-sm p-1"
            }`}
            onClick={() => handleNavigate(item.link)}
            key={index}
          >
            {item.title}
          </div>
        )
      )}
      <hr className="mt-4 text-secondary" />
      <div className="text-primary-text mt-2">Components</div>
      <div className="flex flex-col text-sm mt-2 text-secondary-text">
        <span className="text-secondary text-xs">General</span>
        <div className="pl-2">
          {["Accordion", "Banner", "Card"].map((item, index) => (
            <div className="p-1" key={index}>
              {item}
            </div>
          ))}
        </div>
        <span className="text-secondary text-xs mt-2">Utilities</span>
        <div className="pl-2">
          {["Accordion", "Banner", "Loading", "Card"].map((item, index) => (
            <div className="p-1" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
