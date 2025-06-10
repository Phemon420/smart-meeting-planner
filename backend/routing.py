from fastapi import APIRouter, Query
from typing import List, Dict
from serializers import CalendarManager
from model import UserBusyInput, BookSlotInput

router = APIRouter()
calendar = CalendarManager()

@router.post("/slots")
def post_slots(payload:UserBusyInput):
    return calendar.add_slots(payload)

@router.get("/calendar/{userId}")
def get_calendar(userId: str):
    return calendar.get_calendar(userId)

@router.get("/suggest")
def suggest_slots(duration: int = Query(..., ge=15, le=120)):
    return calendar.get_suggestions(duration)

@router.post("/book")
def book_slot(payload: BookSlotInput):
    return calendar.book_slot(payload)

