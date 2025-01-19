import React from "react";
import "./Events.css";
import { useEvents } from "./useEvents.ts";
import { Col, Divider, Row } from "antd";

const Events: React.FC = () => {
  const { events, openEventId, onEventClick } = useEvents();

  return (
    <>
      <div className={"event-container-container"}>
        <div className={`event-container ${openEventId ? "disappear" : ""}`}>
          <Row gutter={[15, 15]}>
            {events.map((event) => (
              <Col span={3} key={event.id}>
                <div
                  className={"event"}
                  onClick={(clickEvent) =>
                    onEventClick(event.id, clickEvent.currentTarget)
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
