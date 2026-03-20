import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;

async function fetchStravaData() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.error('Missing Strava environment variables');
    process.exit(1);
  }

  try {
    // 1. Get new access token
    const tokenRes = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });
    
    if (!tokenRes.ok) {
      throw new Error(`Failed to refresh token: ${tokenRes.statusText}`);
    }
    
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    // Strava includes the athlete ID during token refresh sometimes, but to be safe let's query the authenticated athlete
    
    // 2. Get athlete profile for ID
    const athleteRes = await fetch('https://www.strava.com/api/v3/athlete', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const athlete = await athleteRes.json();
    const athleteId = athlete.id;

    // 3. Get latest activities and filter to find the last ride/run
    const activitiesRes = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=30', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const activities = await activitiesRes.json();
    
    // Strava has many activity types, we only want cycling and running variants
    const validTypes = ['Ride', 'VirtualRide', 'GravelRide', 'MountainBikeRide', 'EBikeRide', 'EMountainBikeRide', 'Run', 'TrailRun', 'VirtualRun'];
    const latestActivity = activities.find(a => validTypes.includes(a.type) || validTypes.includes(a.sport_type)) || null;

    // 4. Get athlete stats for YTD totals
    const statsRes = await fetch(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const stats = await statsRes.json();

    // 5. Format data
    const stravaData = {
      lastRide: latestActivity ? {
        name: latestActivity.name,
        date: new Date(latestActivity.start_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        distance: (latestActivity.distance * 0.000621371).toFixed(1) + ' mi',
        elevation: Math.round(latestActivity.total_elevation_gain * 3.28084) + ' ft',
        movingTime: `${Math.floor(latestActivity.moving_time / 3600)}h ${Math.floor((latestActivity.moving_time % 3600) / 60)}m`,
        polyline: latestActivity.map?.summary_polyline || null
      } : null,
      ytdRideDistance: stats.ytd_ride_totals ? (stats.ytd_ride_totals.distance * 0.000621371).toFixed(0) + ' mi' : '0 mi',
      ytdRunDistance: stats.ytd_run_totals ? (stats.ytd_run_totals.distance * 0.000621371).toFixed(0) + ' mi' : '0 mi'
    };

    // 6. Save to src/data/strava.json
    const dataPath = path.join(__dirname, '..', 'src', 'data', 'strava.json');
    // Ensure directory exists
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, JSON.stringify(stravaData, null, 2));

    console.log('Successfully fetched and saved Strava data');
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    process.exit(1);
  }
}

fetchStravaData();
