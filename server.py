from flask import Flask, jsonify, request
import requests
import os
import datetime
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
app.config['API_KEY'] = os.getenv('API_KEY')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    api_key = app.config['API_KEY']

    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    #* Current weather API call
    current_url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
    current_response = requests.get(current_url)

    if current_response.status_code != 200:
        return jsonify({'error': 'Failed to fetch current weather data'}), 500

    current_data = current_response.json()

    # Extract lat and lon from current weather data
    lat = current_data['coord']['lat']
    lon = current_data['coord']['lon']

    #* Historical weather API call for each of the past 5 days
    historical_data = []
    for i in range(1, 6):
        # Calculate the timestamp for i days ago in UTC
        timestamp = int((datetime.datetime.utcnow() - datetime.timedelta(days=i)).timestamp())
        historical_url = f'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={timestamp}&appid={api_key}'
        historical_response = requests.get(historical_url)

        if historical_response.status_code == 200:
            historical_data.append(historical_response.json())
        print(historical_data)

    return jsonify({'current_weather': current_data, 'historical_weather': historical_data})

# Run app
if __name__ == '__main__':
    app.run(debug=True)