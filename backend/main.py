# backend/main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse

app = FastAPI()

# Allow CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for simplicity; adjust in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a Review model
class Review(BaseModel):
    id: int
    author: str
    content: str
    rating: int  # Adding rating field

# Simulated database (in-memory)
reviews = [
    Review(id=1, author='John Doe', content='Great product!', rating=5),
    Review(id=2, author='Jane Smith', content='Not what I expected.', rating=3),
]

# Endpoint to get all reviews
@app.get("/api/reviews")
async def get_reviews():
    return JSONResponse(content=[review.dict() for review in reviews])

# Endpoint to create a new review
@app.post("/api/reviews")
async def create_review(review: Review):
    reviews.append(review)
    return JSONResponse(content=review.dict())

# Endpoint to update an existing review
@app.put("/api/reviews/{review_id}")
async def update_review(review_id: int, updated_review: Review):
    for index, review in enumerate(reviews):
        if review.id == review_id:
            reviews[index] = updated_review
            return JSONResponse(content=updated_review.dict())
    raise HTTPException(status_code=404, detail="Review not found")

# Endpoint to delete a review
@app.delete("/api/reviews/{review_id}")
async def delete_review(review_id: int):
    global reviews
    reviews = [review for review in reviews if review.id != review_id]
    return JSONResponse(status_code=204)  # No content response on successful deletion