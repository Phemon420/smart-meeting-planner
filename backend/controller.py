from model import UserBusyInput,BookSlotInput
from typing import Dict, List
from fastapi import HTTPException
from datetime import datetime, timedelta, time
from utils import parse_time, _convert_to_minutes, create_workday_array,convert_to_time

user_busy_slots: Dict[str, List[tuple]] = {}
newly_booked_slots: List[tuple] = []
available_slots: List[tuple] = []

class CalendarService:
    def add_slots(self, payload: UserBusyInput):
        if not payload.users:
            raise HTTPException(status_code=400, detail="User list cannot be empty")
        
        newly_booked_slots.clear()
        available_slots.clear()
        user_busy_slots.clear()

        for user in payload.users:
            uid = str(user.id)
            if uid not in user_busy_slots:
                user_busy_slots[uid] = []
            for slot in user.busy:
                start_min = _convert_to_minutes(slot[0])
                end_min = _convert_to_minutes(slot[1])
                user_busy_slots[uid].append((start_min, end_min))
        return {
                "message": "Slots added successfully",
                "user_busy_slots": user_busy_slots
                }

    def get_calendar(self, user_id: str):
        print("Fetching calendar for user:",user_busy_slots.get(user_id, []))
        return {
            "user_id": user_id,
            "busy_slots": user_busy_slots.get(user_id, []),
            "newly_booked": newly_booked_slots
        }

    def get_suggestions(self, duration: int):
        
        whole_day_chart = create_workday_array(user_busy_slots)
        available_slots=[]
        counts=0

        i = 540
        while i <= 1080 - duration:
            if(counts>2):
                break
            if whole_day_chart[i] == 0:
                print(convert_to_time(i))
                om=True
                for j in range(i, i + duration):
                    if whole_day_chart[j] != 0:
                        #print(f"lol:{convert_to_time(j)}")
                        om=False
                        break   

                if(om):
                    gfg=0
                    for k in range(i+duration,1080):
                        #print(f"gfg:{convert_to_time(k)}")
                        if whole_day_chart[k] != 0:
                            gfg=k
                            break
                    available_slots.append((convert_to_time(i),convert_to_time(gfg)))
                    counts+=1
                    i= gfg
                    continue
            i += 1

        for slot in available_slots:
            print(f"New slot booked: {slot[0]} to {slot[1]}")
            
        return available_slots
    
    def book_slot(self, payload: BookSlotInput):
        print("Booking slot for user:", payload)
        newly_booked_slots.append(((payload.start),(payload.end)))
        return newly_booked_slots
