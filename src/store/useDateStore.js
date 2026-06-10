import { create } from "zustand";

const useDateStore = create((set) => ({
  // Relationship
  girlfriendAnswer: "",

  // Meet Question
  meetAnswer: "",

  // Date & Time
  selectedDate: "",
  selectedTime: "",

  // Location
  selectedLocation: null,

  // Food
  selectedFood: null,

  // Actions

  setGirlfriendAnswer: (answer) =>
    set({
      girlfriendAnswer: answer,
    }),

  setMeetAnswer: (answer) =>
    set({
      meetAnswer: answer,
    }),

  setSelectedDate: (date) =>
    set({
      selectedDate: date,
    }),

  setSelectedTime: (time) =>
    set({
      selectedTime: time,
    }),

  setSelectedLocation: (location) =>
    set({
      selectedLocation: location,
    }),

  setSelectedFood: (food) =>
    set({
      selectedFood: food,
    }),

  resetDate: () =>
    set({
      girlfriendAnswer: "",
      meetAnswer: "",
      selectedDate: "",
      selectedTime: "",
      selectedLocation: null,
      selectedFood: null,
    }),
}));

export default useDateStore;