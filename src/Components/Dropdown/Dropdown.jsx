import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function Dropdown(props) {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className="border-b border-gray relative">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleToggleOpen}
      >
        <p className="text-primary">{props.label}</p>
        <FaChevronDown />
      </div>
      {isOpen ? props.children : null}
    </div>
  );
}
