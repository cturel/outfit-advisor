import azure.functions as func
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="outfits", methods=["GET", "OPTIONS"])
def outfit_advisor(req: func.HttpRequest) -> func.HttpResponse:

    if req.method == "OPTIONS":
        return func.HttpResponse(
            status_code=200,
            headers={
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        )

    category = req.params.get("category", "casual").lower()

    outfits = {
        "casual": ["White t-shirt + jeans", "Hoodie + joggers", "Polo + chinos"],
        "formal": ["Black suit + white shirt", "Blazer + dress pants", "Classic tuxedo"],
        "sport": ["Running shorts + tank top", "Leggings + sports bra", "Track suit"]
    }

    suggestions = outfits.get(category, outfits["casual"])

    return func.HttpResponse(
        body=json.dumps({"category": category, "suggestions": suggestions}),
        mimetype="application/json",
        headers={"Access-Control-Allow-Origin": "*"}
    )