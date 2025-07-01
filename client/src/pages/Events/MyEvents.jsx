import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "lucide-react";
import React from "react";

const MyEvents = () => {
  const { user } = useAuth();

  const fetchMyEvents = async () => {
    const res = await axios("http://localhost:5000/events/my", {
      params: { email: user?.email },
    });
    return res.data;
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

  if (isLoading || isError)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Loader className="h-7 w-7 animate-spin text-black" />
      </div>
    );

  return (
    <div>
      <pre>{JSON.stringify(myEvents, null, 2)}</pre>
    </div>
  );
};

export default MyEvents;
