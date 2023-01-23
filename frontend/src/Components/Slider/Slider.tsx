import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { devices } from "../../Styles/devices";
import events from "../../Pages/Events/Events.json";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useModal } from "../../Modal/useModal";
import Card from "../Card/Card";

const slideReducer = (
  state: number,
  action: { type: string; max: number }
): number => {
  switch (action.type) {
    case "previous":
      if (state === 0) return action.max;
      return state - 1;
    case "next":
      if (state === action.max) return 0;
      return state + 1;
    default:
      return 0;
  }
};

const Slider = (): React.ReactElement => {
  const [currentSlide, dispatch] = useReducer(slideReducer, 0);
  const { setModal, ModalContainer } = useModal();

  const previousHandler = (): void => {
    dispatch({ type: "previous", max: events.length - 1 });
  };

  const nextHandler = (): void => {
    dispatch({ type: "next", max: events.length - 1 });
  };

  const detailsHandler = (): void => {
    setModal(<Card event={events[currentSlide]} />);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextHandler();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <Container>
      <Previous onClick={previousHandler} className="navigation">
        <ChevronLeftIcon />
      </Previous>
      <Next onClick={nextHandler} className="navigation">
        <ChevronRightIcon />
      </Next>
      <Title>
        {events[currentSlide].startDate +
          " - " +
          events[currentSlide].type +
          (events[currentSlide].location !== ""
            ? " - ".concat(events[currentSlide].location)
            : "")}
      </Title>
      <Img src={events[currentSlide].illustration} onClick={detailsHandler} />
      <ModalContainer />
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 5px;
  min-width: 310px;
  width: 90%;
  max-width: 800px;
  min-height: 240px;
  @media ${devices.tablette} {
    height: 300px;
    &:hover .navigation {
      visibility: visible;
    }
  }
`;

const Title = styled.h2`
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 10px;
  top: 0px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-shadow: 0px 0px 5px var(--primary-text-color);
`;

const SlideButton = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  width: 10%;
  max-width: 80px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  @media ${devices.desktop} {
    &.navigation {
      visibility: hidden;
    }
  }
`;

const Previous = styled(SlideButton)`
  left: 0px;
`;

const Next = styled(SlideButton)`
  right: 0px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
