import { Router } from "express";
import { getAllEvents, getSingleEvent, postEvent, getParticipantsOfEvent, addParticipant } from "../controllers/EventsControllers.js";



const router = Router();

router.get("/", getAllEvents)

router.get("/:id", getSingleEvent)

router.post("/addEvent", postEvent)

router.get("/:id/participants", getParticipantsOfEvent)

router.patch("/:id/registration", addParticipant)

export {router as eventsRouters}