import { useEffect, useState } from "react";
import { Event } from "./Events.types";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [openEventId, setOpenEventId] = useState<number>();
  const [openEventElementPosition, setOpenEventElementPosition] = useState<{
    top: number;
    left: number;
    height: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const events: Event[] = Array.from({ length: 20 }, (_, index) => ({
      id: Math.random() * 10000000,
      name: `Event${index + 1}`,
      users: Array.from({ length: Math.random() * 5 }, (_, index) => ({
        id: Math.random() * 10000000,
        firstName: `User`,
        lastName: `${index + 1}`,
      })),
    }));
    setEvents(events);
  }, []);

  const onEventClick = (eventId: number, eventElement: EventTarget) => {
    const rect = (eventElement as HTMLElement).getBoundingClientRect();

    setOpenEventId(eventId);
    setOpenEventElementPosition({
      top: rect.top,
      left: rect.left,
      height: rect.height,
      width: rect.width,
    });
  };

  return {
    events,
    openEventId,
    setOpenEventId,
    onEventClick,
    openEventElementPosition,
  };
};
