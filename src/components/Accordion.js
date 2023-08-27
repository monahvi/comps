import { useState } from "react";
import { GoChevronDown, GoArrowDownLeft } from 'react-icons/go';

function Accordion({ items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

// eventHandler out side the map function
    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-3xl">
            {isExpanded ? <GoChevronDown /> : <GoArrowDownLeft />}
        </span>

        return (
            <div key={item.id}>
                <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>{icon} {item.label}</div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;