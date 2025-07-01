import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const fetchEvents = async () => {
  const res = await axios.get("http://localhost:5000/events");
  return res.data;
};

const Events = () => {
  const [joining, setJoining] = useState(null);

  const {
    data: events = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const handleJoin = async (eventId) => {
    setJoining(eventId);
    try {
      await axios.patch(`http://localhost:5000/events/join/${eventId}`);
      toast.success("You’ve joined the event!");
      refetch();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to join event!");
    } finally {
      setJoining(null);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="h-7 w-7 animate-spin text-black" />
      </div>
    );

  if (isError)
    return <p className="text-center text-red-500">Failed to load events!</p>;

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-12 space-y-6">
      <h2 className="text-2xl font-bold">All Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event._id} className="bg-white shadow-md rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>{event.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <span className="font-semibold">Posted by:</span>{" "}
                  {event.postedBy?.name}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p>
                  <span className="font-semibold">Time:</span> {event.time}
                </p>
                <p className="text-sm text-gray-700">{event.description}</p>
                <p>
                  <span className="font-semibold">Attendees:</span>{" "}
                  {event.attendeeCount}
                </p>
                <Button
                  className="w-full mt-2"
                  disabled={joining === event._id || event?.alreadyJoined}
                  onClick={() => handleJoin(event._id)}
                >
                  {joining === event._id
                    ? "Joining..."
                    : event?.alreadyJoined
                    ? "Joined"
                    : "Join Event"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
