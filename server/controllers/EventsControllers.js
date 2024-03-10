import { sortArrayOfEventsByDateAndTime } from "../helpers/sortArrayByParams.js";
import Event from "../models/Event.js";
import LinksImgSponsors from "../models/LinksImgSponsors.js";

export const getAllEvents = async (req, res) => {
  try {
    const listEvents = await Event.find().select([
      "_id",
      "name",
      "place",
      "type",
      "dateOfEvent",
      "timeOfStartEvent",
      "distances",
      "measurement",
    ]);

    const filteredAndSortedListEvents = listEvents
      .filter((event) => Date.parse(event.dateOfEvent + " " + event.timeOfStartEvent) >= Date.now())
      .sort(sortArrayOfEventsByDateAndTime);

    Array.isArray(filteredAndSortedListEvents) ? filteredAndSortedListEvents : [filteredAndSortedListEvents]
    // If there is only one event in the database, it will be returned as an object. Processing data on the frontend takes an array.

    if (filteredAndSortedListEvents.length === 0) {
      return res.status(404).send("Events not found");
    }

    res.status(200).json(filteredAndSortedListEvents);
  } catch (error) {
    res.status(500).send("Server events error");
  }
};

export const getImagesSponsors = async (req, res) => {
  try {
    const linksImg = await LinksImgSponsors.find();

    if (!linksImg) {
      return res.status(404).json({ message: "Images of sponsors doesn't exist" });
    }

    res.status(200).json(linksImg);
  } catch (error) {
    res.status(500).json({ message: "Server error search images of sponsors" });
  }
};

export const getSingleEvent = async (req, res) => {
  try {
    const idEvent = req.params.id;

    const requiredEvent = await Event.findById({ _id: idEvent }).select(["-participants.email"]);

    res.status(200).json(requiredEvent);

    if (!requiredEvent) {
      return res.status(404).json({ message: "Maratón neexistuje" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error search single event by id" });
  }
};

export const addParticipant = async (req, res) => {
  try {
    const eventId = req.params.id;

    const { firstName, lastName, age, email, gender, distance } = req.body;

    const requiredEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        $push: {
          participants: {
            firstName,
            lastName,
            age,
            email,
            gender,
            distance,
          },
        },
      },
      { new: true }
    );

    res.json({ message: "New participant is added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error addParticipant" });
  }
};

export const postEvent = async (req, res) => {
  try {
    const {
      name,
      place,
      participants,
      type,
      dateOfEvent,
      addDate,
      sponsorsEvent,
      timeOfStartEvent,
      addTimeStartEvent,
      distances,
      measurement,
      startpoint,
      registration,
      addRegistration,
      presentation,
      addPresentation,
      payments,
      addPayments,
      categoriesMale,
      categoriesFemale,
      addCategories,
    } = req.body;

    const newEvent = new Event({
      name,
      place,
      participants,
      type,
      dateOfEvent,
      addDate,
      sponsorsEvent,
      timeOfStartEvent,
      addTimeStartEvent,
      distances,
      measurement,
      startpoint,
      registration,
      addRegistration,
      presentation,
      addPresentation,
      payments,
      addPayments,
      categoriesMale,
      categoriesFemale,
      addCategories,
    });

    await newEvent.save();

    res.status(200).json({ newEvent, message: "New event is added" });
  } catch (error) {
    res.status(500).json({ message: "Error add new event" });
  }
};

export const getParticipantsOfEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    const requiredEvent = await Event.findById({ _id: eventId });

    if (!requiredEvent) {
      return res.status(404).json({ message: "Maratón neexistuje" });
    }

    res.json(requiredEvent.participants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error getParticipantsOfEvent" });
  }
};
