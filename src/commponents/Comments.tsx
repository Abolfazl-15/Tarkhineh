import React from "react";
import { CommentsData } from "../data/Comment";
import CommentSlider from "./CommentSlider";

export default function CommentsPage() {
  return (
    <div className="p-4 mt-10 text-center relative -top-12" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-green-700">نظرات کاربران</h1>

      <CommentSlider comments={CommentsData} />
    </div>
  );
}
