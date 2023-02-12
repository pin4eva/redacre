import { useEffect } from "react";
import styled from "styled-components";

export const Select = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const wrapper = document.querySelector(".select-option-body");
      const trigger = document.querySelector(".trigger-button");

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
      <span>main job</span>

      <div className="select">
        <span className="select-label">Main job role</span>
        <div className="select-wrapper">
          <div className="select-option-body">
            <button className="select-option-trigger trigger-button">
              Select role...
            </button>
            <div className="select-option-wrapper">
              <div className="select-option-item" data-value="ds">
                UI/UX Designer
              </div>
              <div className="select-option-item" data-value="fe">
                Frontend Engineer
              </div>
              <div className="select-option-item" data-value="be">
                Backend Engineer
              </div>
              <div className="select-option-item" data-value="qa">
                QA Engineer
              </div>
              <div className="select-option-item" data-value="un">
                Unicorn
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
