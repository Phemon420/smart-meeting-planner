from pydantic import BaseModel
from typing import List, Tuple, Union

class UserBusy(BaseModel):
    id: Union[str, int]
    busy: List[Tuple[str, str]]

class UserBusyInput(BaseModel):
    users: List[UserBusy]

class BookSlotInput(BaseModel):
    start: str  # in HH:MM
    end: str