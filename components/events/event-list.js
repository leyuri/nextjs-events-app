import EventItem from "./event-item";

export default function EventList(props) {
  const { item } = props;

  return (
    <ul>
      {item.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}
