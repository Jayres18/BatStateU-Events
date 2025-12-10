export type EventItem = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
};

export const events: EventItem[] = [
  {
    slug: "batstateu-tech-summit-2025",
    title: "BatStateU Tech Summit 2025",
    date: "2025-12-15",
    time: "8:00 AM",
    location: "Engineering Building, Batangas State University",
    image: "/images/event1.png",
  },
  {
    slug: "career-fair-2025",
    title: "Career Fair 2025",
    date: "2025-12-10",
    time: "10:00 AM",
    location: "Main Gymnasium",
    image: "/images/event2.png",
  },
  {
    slug: "student-organization-meetup",
    title: "Student Organization Meetup",
    date: "2025-12-05",
    time: "2:00 PM",
    location: "Student Center",
    image: "/images/event3.png",
  },
  {
    slug: "cultural-week-celebration",
    title: "Cultural Week Celebration",
    date: "2025-12-18",
    time: "12:00 PM",
    location: "Campus Grounds",
    image: "/images/event4.png",
  },
  {
    slug: "entrepreneurship-workshop",
    title: "Entrepreneurship Workshop",
    date: "2025-12-08",
    time: "1:00 PM",
    location: "Business Department, Room 201",
    image: "/images/event5.png",
  },
  {
    slug: "sports-festival-2025",
    title: "Sports Festival 2025",
    date: "2026-01-08",
    time: "7:00 AM",
    location: "Sports Complex",
    image: "/images/event6.png",
  },
];

export default events;
