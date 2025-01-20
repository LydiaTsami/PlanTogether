import React from "react";
import "./Events.css";
import { useEvents } from "./useEvents.ts";
import { Col, Divider, Row } from "antd";

const Events: React.FC = () => {
  const {
    events,
    onEventClick,
    onEventMouseOver,
    eventContainerContainerRef,
    hoveredEventId,
    hoveredEventRect,
    clickedEventId,
    clickedEventRect,
  } = useEvents();

  return (
    <>
      <div
        style={{
          height: clickedEventRect
            ? clickedEventRect.height
            : hoveredEventRect?.height,
          width: clickedEventRect
            ? clickedEventRect.width
            : hoveredEventRect?.width,
          top: clickedEventRect ? clickedEventRect.top : hoveredEventRect?.top,
          left: clickedEventRect
            ? clickedEventRect.left
            : hoveredEventRect?.left,
          position: "absolute",
        }}
        className={`eventPanel ${clickedEventId ? "clickedEventPanel" : ""}`}
      ></div>

      <div
        className={"event-container-container"}
        ref={eventContainerContainerRef}
      >
        <div className={`event-container ${clickedEventId ? "disappear" : ""}`}>
          <Row gutter={[15, 15]}>
            {events.map((event) => (
              <Col span={3} key={event.id}>
                <div
                  className={"event"}
                  onClick={() => onEventClick(event.id)}
                  onMouseEnter={(clickEvent) =>
                    onEventMouseOver(event.id, clickEvent.currentTarget)
                  }
                >
                  <div className={"event-title"}>{event.name}</div>
                  <Divider className={"event-title-divider"} />
                  <Row className={"users"} gutter={[5, 5]}>
                    {event.users.map((user) => (
                      <Col key={user.id}>
                        <div className={"user"}>
                          {user.firstName + user.lastName}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Events;
