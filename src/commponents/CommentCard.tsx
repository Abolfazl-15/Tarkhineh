import React from "react";
import { Comment } from "../data/Comment";

type Props = { comment: Comment };

export default function CommentCard({ comment }: Props) {
  return (
    <div className="bg-white border  border-gray-200 rounded-lg shadow p-4 flex flex-col gap-4 w-[280px] sm:w-[350px] md:w-[606px] mx-auto">
      <div className="flex flex-row items-center gap-3 justify-between">
        <img
          src={comment.avatar}
          alt={`${comment.name} ${comment.family}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-right flex-1">
          <h4 className="text-sm sm:text-base font-medium">
            {comment.name} {comment.family}
          </h4>
          <span className="text-[10px] sm:text-xs text-gray-500">
            {comment.date}
          </span>
        </div>
      </div>
      <p className="text-[12px] sm:text-sm text-gray-700 text-right">
        {comment.text}
      </p>
    </div>
  );
}
