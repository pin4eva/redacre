import { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface IProp {
  options: ReactNode[];
  selectedItem: string;
}

export const Select: React.FC<IProp> = ({ options, selectedItem }: IProp) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const wrapper = document.querySelector(".select-option-body");
      const trigger = document.querySelector(".trigger-button");
      const optionsWrapper = document.querySelector(".select-option-wrapper");

      const options = Array.from(optionsWrapper?.children as Iterable<Element>);

      options.forEach((opt) => {
        opt.addEventListener("click", () => {
          wrapper?.classList.remove("isActive");
        });
      });

      trigger?.addEventListener("click", () => {
        wrapper?.classList.toggle("isActive");
      });

      document.addEventListener("click", (event) => {
        const didClickOutside = !wrapper?.contains(
          event?.target as unknown as Node
        );

        if (didClickOutside) {
          wrapper?.classList.remove("isActive");
        }
      });
    }

    return () => {
      const wrapper = document.querySelector(".select-option-body");
      const trigger = document.querySelector(".trigger-button");
      trigger?.addEventListener("click", () => {
        wrapper?.classList.toggle("isActive");
      });
    };
  }, []);
  return (
    <Wrapper>
      <div className="select">
        <div className="select-wrapper">
          <div className="select-option-body">
            <button className="select-option-trigger trigger-button">
              {selectedItem ? selectedItem : "Select item..."}
            </button>
            <div className="select-option-wrapper">{options}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
