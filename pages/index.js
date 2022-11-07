import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePAge() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
