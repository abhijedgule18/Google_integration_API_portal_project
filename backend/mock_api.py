import json
from fastapi import APIRouter

router = APIRouter()

mock_reviews = [
    {
        "id": 1,
        "author": "John Doe",
        "rating": 5,
        "comment": "Great service!"
    },
    {
        "id": 2,
        "author": "Jane Smith",
        "rating": 4,
        "comment": "Very satisfied."
    }
]

@router.get("/mock/reviews")
async def get_mock_reviews():
    return mock_reviews