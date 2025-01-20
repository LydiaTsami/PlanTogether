import { useEffect, useRef, useState } from "react";
import { Event } from "./Events.types";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [hoveredEventId, setHoveredEventId] = useState<number>();
  const [hoveredEventRect, setHoveredEventRect] = useState<DOMRect | null>(
    null,
  );
  const [clickedEventId, setClickedEventId] = useState<number>();
  const [clickedEventRect, setClickedEventRect] = useState<DOMRect | null>(
    null,
  );
  const eventContainerContainerRef = useRef<HTMLDivElement>(null); // Specify the type

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

  const onEventClick = (eventId: number) => {
    setClickedEventId(eventId);
    if (eventContainerContainerRef.current) {
      setClickedEventRect(
        eventContainerContainerRef.current.getBoundingClientRect(),
      );
    }
  };

  const onEventMouseOver = (eventId: number, eventElement: EventTarget) => {
    const rect = (eventElement as HTMLElement).getBoundingClientRect();
    setHoveredEventId(eventId);
    setHoveredEventRect(rect);
  };

  return {
    events,
    onEventClick,
    onEventMouseOver,
    eventContainerContainerRef,
    hoveredEventId,
    hoveredEventRect,
    clickedEventId,
    clickedEventRect,
  };
};
