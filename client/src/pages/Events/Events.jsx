import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Search, Users, X } from "lucide-react";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Events = () => {
  const [joining, setJoining] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/events", {
      params: { search, filter },
    });
    return res.data;
  };

  const {
    data: events = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["events", search, filter],
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(Number.parseInt(hours), Number.parseInt(minutes));
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const hasActiveFilters = search.trim() !== "" || filter !== "";

  const clearFilters = () => {
    setSearch("");
    setFilter("");
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-xl bg-gray-50/50 transition-all duration-200"
              />
            </div>

            {/* Filter Select + Clear Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Select onValueChange={(val) => setFilter(val)} value={filter}>
                <SelectTrigger className="w-full sm:w-[200px] border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-xl bg-gray-50/50">
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-gray-200">
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="current-week">This Week</SelectItem>
                  <SelectItem value="last-week">Last Week</SelectItem>
                  <SelectItem value="current-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200 bg-transparent"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              All Events
            </h1>
            <div className="mt-2 flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>
          <p className="text-gray-700 text-base">
            Discover and join upcoming events in your community
          </p>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <Loader className="h-7 w-7 animate-spin text-black" />
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-2">Failed to load events</p>
            <p className="text-gray-500 text-sm">Please try again later</p>
          </div>
        ) : events.length === 0 ? (
          <Card className="text-center">
            <p className="text-gray-800 text-xl">No events found!</p>
            <p className="text-gray-700 text-base -mt-6">
              Try adjusting your search or filters
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event._id}
                className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader className="pb-4">
                  <div className="space-y-1">
                    {/* Title and Location */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2">
                        <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600 truncate">
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700 font-medium">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">
                          {formatTime(event.time)}
                        </span>
                      </div>
                    </div>

                    {/* Posted By */}
                    <div className="text-xs text-gray-500">
                      Posted by{" "}
                      <span className="font-medium text-gray-700">
                        {event.postedBy?.name}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="-mt-6 pt-0 space-y-4">
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Attendees */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {event.attendeeCount}{" "}
                        {event.attendeeCount === 1 ? "attendee" : "attendees"}
                      </span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <Button
                    className={`w-full cursor-pointer rounded-xl font-medium transition-all duration-200 ${
                      event.alreadyJoined
                        ? "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
                        : joining === event._id
                        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                        : "bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md"
                    }`}
                    disabled={joining === event._id || event.alreadyJoined}
                    onClick={() => handleJoin(event._id)}
                    variant={event.alreadyJoined ? "outline" : "default"}
                  >
                    {joining === event._id ? (
                      <>Joining...</>
                    ) : event.alreadyJoined ? (
                      "✓ Joined"
                    ) : (
                      "Join Event"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
