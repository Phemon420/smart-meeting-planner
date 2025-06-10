from typing import List, Dict
from controller import CalendarService
from model import UserBusyInput

class CalendarManager:
    def __init__(self):
        self.service = CalendarService()

    def add_slots(self, payload: UserBusyInput):
        return self.service.add_slots(payload)

    def get_calendar(self, user_id: str):
        return self.service.get_calendar(user_id)

    def get_suggestions(self, duration: int):
        return self.service.get_suggestions(duration)

    def book_slot(self, payload: UserBusyInput):
        return self.service.book_slot(payload)