# Security Camera

Project to detect motion, take picture and send notification (interaction with MySmartHome APP) to user using Raspberry pi, sensor and camera.

To test notification use register endpoint and then call GET /simulateMotion

Expects following config object for notifications from camera

```json
{
    "type"(String): "All" | "Push" | "Email", 
    "active"(boolean): true, 
    "detection"(String): "All" | "Human", 
    "timeRange": "" // not implemented yet
}
```

## How to run

Create file .env in root directory with variables (check config to see variables)

```
npm/yarn install 
```
### For using without Raspberry
```
npm/yarn startServer
```
### For using with Raspberry
```
npm/yarn start
```