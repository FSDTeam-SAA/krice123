"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserProfileById,
  updateUserProfile,
  type UpdateProfilePayload,
} from "@/lib/api/auth";

export const useGetUserProfile = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => {
      if (!userId) throw new Error("User ID is required");
      return getUserProfileById(userId);
    },
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      payload,
    }: {
      userId: string;
      payload: UpdateProfilePayload;
    }) => updateUserProfile(userId, payload),
    onSuccess: (data, variables) => {
      // Invalidate and refetch user profile
      queryClient.invalidateQueries({
        queryKey: ["userProfile", variables.userId],
      });
    },
  });
};

export default function useProfile() {
  return {
    useGetUserProfile,
    useUpdateUserProfile,
  };
}
