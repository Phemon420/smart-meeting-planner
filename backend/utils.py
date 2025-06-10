from fastapi import HTTPException
from datetime import datetime, timedelta, time
from typing import Dict, List


def parse_time(t: str) -> time:
    try:
        return datetime.strptime(t, "%H:%M").time()
    except ValueError:
        raise HTTPException(status_code=400, detail=f"Invalid time format: {t}")

@staticmethod
def _convert_to_minutes(time_str: str) -> int:
    try:
        hours, minutes = map(int, time_str.split(":"))
        return hours * 60 + minutes
    except Exception:
        raise HTTPException(status_code=400, detail=f"Invalid time format: {time_str}")
    
def create_workday_array(user_busy_slots: Dict[str, List[tuple]]) -> list:
    minutes = [0] * 1440  # full day array

    # Step 1: Mark non-working hours as 1
    for i in range(0, 540):     # before 09:00
        minutes[i] = 1
    for i in range(1080, 1440): # after 18:00
        minutes[i] = 1

    # Step 2: Iterate over each user's busy slots and mark as 2
    for user_id, slots in user_busy_slots.items():
        for start, end in slots:
            for i in range(start, end):
                if 540 <= i < 1080:  # only within working hours
                    minutes[i] = 2

    return minutes


def convert_to_time(minutes: int) -> str:
    if not (0 <= minutes < 1440):
        raise HTTPException(status_code=400, detail=f"Invalid minute value: {minutes}")
    hours = minutes // 60
    mins = minutes % 60
    return f"{hours:02}:{mins:02}"