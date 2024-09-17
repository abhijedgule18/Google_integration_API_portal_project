import httpx

async def get_google_business_reviews(access_token: str, account_id: str, location_id: str):
    headers = {'Authorization': f'Bearer {access_token}'}
    url = f'https://mybusiness.googleapis.com/v4/accounts/{account_id}/locations/{location_id}/reviews'
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    if response.status_code != 200:
        raise Exception(f'Failed to fetch reviews: {response.text}')
    return response.json()