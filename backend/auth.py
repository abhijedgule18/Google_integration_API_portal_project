from fastapi import Depends, HTTPException, APIRouter
from fastapi.security import OAuth2AuthorizationCodeBearer
import httpx

router = APIRouter()

# Setup OAuth2 Authorization Code Flow with Google
OAUTH2_CLIENT_ID = "466741449460-d26sdo1tg0mctamnsk1b91mt37qlj1r5.apps.googleusercontent.com"
OAUTH2_CLIENT_SECRET = "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"
GOOGLE_REDIRECT_URI = "http://localhost:8000/auth/callback"

oauth2_scheme = OAuth2AuthorizationCodeBearer(
    authorizationUrl=f"https://accounts.google.com/o/oauth2/auth?client_id={OAUTH2_CLIENT_ID}&redirect_uri={GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile",
    tokenUrl="https://oauth2.googleapis.com/token"
)

@router.get("/auth")
async def google_auth():
    return {
        "authorization_url": f"https://accounts.google.com/o/oauth2/auth?client_id={OAUTH2_CLIENT_ID}&redirect_uri={GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile"
    }

@router.get("/auth/callback")
async def auth_callback(code: str):
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://oauth2.googleapis.com/token",
            data={
                "code": code,
                "client_id": OAUTH2_CLIENT_ID,
                "client_secret": OAUTH2_CLIENT_SECRET,
                "redirect_uri": GOOGLE_REDIRECT_URI,
                "grant_type": "authorization_code"
            }
        )
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Failed to get token")
    return response.json()