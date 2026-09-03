"use client";

import { createContext, useContext, useState } from "react";
import BookingModal from "@/components/ui/BookingModel";

const BookingModalContext = createContext(null);

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used inside a BookingModalProvider");
  }
  return ctx;
}