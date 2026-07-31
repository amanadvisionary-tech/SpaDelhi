"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <ChevronRight size={14} className="text-amber-600" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-amber-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function InfoBox({ title, children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-700">
          ⚠️
        </div>
        <h3 className="text-xl font-semibold text-amber-900">{title}</h3>
      </div>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export function BenefitCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        ✓
      </div>
      <h3 className="text-lg font-semibold text-amber-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-2xl border border-amber-100 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-amber-900">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-amber-600 transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <div className="border-t border-amber-100 px-5 py-4 text-gray-700 leading-relaxed">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
