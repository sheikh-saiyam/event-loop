/* eslint-disable no-unused-vars */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const AddEvents = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const eventData = {
      ...data,
      attendeeCount: 0,
      attendees: [],
      postedBy: {
        name: user.name || "Anonymous",
        email: user.email || "no-email@example.com",
      },
    };

    try {
      await axios.post(`${API_URL}/events `, eventData);
      navigate("/my-events");
      toast.success("Event added successfully!");
      reset();
    } catch (err) {
      toast.error("Failed to add event. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-xl p-0 pb-6">
        <CardHeader className={"gap-0.5 border-b pt-5"}>
          <CardTitle className="text-xl font-semibold">Add New Event</CardTitle>
          <CardDescription className={"font-medium"}>
            Fill out the form to publish a new event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <Label>Event Title</Label>
              <Input
                placeholder="Enter event title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date */}
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  {...register("date", { required: "Date is required" })}
                />
                {errors.date && (
                  <p className="text-sm text-red-500">{errors.date.message}</p>
                )}
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label>Time</Label>
                <Input
                  type="time"
                  {...register("time", { required: "Time is required" })}
                />
                {errors.time && (
                  <p className="text-sm text-red-500">{errors.time.message}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                placeholder="Enter event location"
                {...register("location", { required: "Location is required" })}
              />
              {errors.location && (
                <p className="text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter event description"
                rows={4}
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Add Event"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddEvents;
