import { Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import type { Review } from "../../../data/types";

interface ServiceReviewsProps {
  reviews: Review[];
  reviewCount: number;
}

export function ServiceReviews({ reviews, reviewCount }: ServiceReviewsProps) {
  return (
    <section className="rounded-[24px] bg-white p-6 shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
      <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] font-bold leading-[30px] text-[#0d1c2e]">
        Escucha a {reviewCount} vecinos
      </h2>
      <p className="mt-1 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
        Reseñas verificadas de la comunidad ComuniApp
      </p>

      <ul className="mt-6 flex flex-col gap-5">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="rounded-[16px] border border-[#e8eef8] p-4"
          >
            <div className="flex items-start gap-3">
              <ImageWithFallback
                alt={review.author}
                className="size-10 rounded-full object-cover"
                src={review.avatar}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]">
                    {review.author}
                  </span>
                  <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#94a3b8]">
                    {review.date}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`size-3.5 ${
                        index < Math.round(review.rating)
                          ? "fill-[#f59e0b] text-[#f59e0b]"
                          : "text-[#e2e8f0]"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#475569]">
                  {review.comment}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
