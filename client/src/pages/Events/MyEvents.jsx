/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UpdateEventModal } from "./components/UpdateEvent";
import { DeleteEventDialog } from "./components/DeleteEvent";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function MyEventsPage() {
  const { user } = useAuth();

  const fetchMyEvents = async () => {
    const res = await axios("http://localhost:5000/events/my", {
      params: { email: user?.email },
    });
    return res?.data;
  };

  const {
    data: myEvents = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["my-events", user?.email],
    queryFn: fetchMyEvents,
    enabled: !!user?.email,
  });

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  useEffect(() => {
    if (myEvents?.length) {
      setEvents(myEvents);
    }
  }, [myEvents]);

  if (isLoading || isError) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Loader className="h-7 w-7 animate-spin text-black" />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date?.setHours(Number.parseInt(hours), Number.parseInt(minutes));
    return date?.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDeleteEvent = async () => {
    if (!eventToDelete) return;

    try {
      await axios.delete(`http://localhost:5000/events/${eventToDelete._id}`);

      const updatedEvents = events.filter(
        (event) => event._id !== eventToDelete._id
      );
      setEvents(updatedEvents);

      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete event!");
    } finally {
      setIsDeleteDialogOpen(false);
      setEventToDelete(null);
    }
  };

  const openUpdateModal = (event) => {
    setSelectedEvent(event);
    setIsUpdateModalOpen(true);
  };

  const openDeleteDialog = (event) => {
    setEventToDelete(event);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              My Events
            </h1>
            <div className="mt-2 flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>
          <p className="text-gray-700 text-base">
            Manage and track your created events
          </p>
        </div>

        {/* Events Grid */}
        {events?.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No events found!
            </h3>
            <p className="text-gray-500">You haven't created any events yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event._id}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      <Users className="w-3 h-3 mr-1" />
                      {event.attendeeCount}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Posted by:{" "}
                    <span className="font-medium">{event.postedBy.name}</span>
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Date and Time */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                    <span>{formatTime(event.time)}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-700">
                    <p className="line-clamp-3">{event.description}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => openUpdateModal(event)}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Update
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex-1"
                      onClick={() => openDeleteDialog(event)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Update Modal */}
        <UpdateEventModal
          event={selectedEvent}
          isOpen={isUpdateModalOpen}
          onClose={() => {
            setIsUpdateModalOpen(false);
            setSelectedEvent(null);
          }}
          refetch={refetch}
        />

        {/* Delete Dialog */}
        <DeleteEventDialog
          event={eventToDelete}
          isOpen={isDeleteDialogOpen}
          onClose={() => {
            setIsDeleteDialogOpen(false);
            setEventToDelete(null);
          }}
          onConfirm={handleDeleteEvent}
        />
      </div>
    </div>
  );
}
