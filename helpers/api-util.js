export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-f5341-default-rtdb.firebaseio.com/event.json"
  );
  console.log("response", response);
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  console.log("events", events);

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  console.log("allEvents", allEvents);
  return allEvents.filter((event) => event.isFeatured);
}
