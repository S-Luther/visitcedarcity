export let SUMASchedule = {"schedule": [
    {
    "date": "2022-03-31",
    "groups": [{ "time": "6:00:00 PM",
    "sessions": [ {"name": "2022 Senior BFA Capstone Exhibition Opening Reception",
    "url": "https://www.suu.edu/pva/","timeStart": "6:00:00 PM",
    "timeEnd": "8:00:00 PM",
    "location": "SUMA",
    "tracks": ["SUMA"],"id": "1"}]},]},
    {
    "date": "2022-04-01",
    "groups": [{ "time": "10:00:00 AM",
    "sessions": [ {"name": "Create Playdate",
    "url": "https://www.suu.edu/pva/","timeStart": "10:00:00 AM",
    "timeEnd": "11:00:00 AM",
    "location": "SUMA",
    "tracks": ["SUMA"],"id": "2"}]},]},
    {
    "date": "2022-04-15",
    "groups": [{ "time": "10:00:00 AM",
    "sessions": [ {"name": "Create Playdate ",
    "url": "https://www.suu.edu/pva/","timeStart": "10:00:00 AM",
    "timeEnd": "11:00:00 AM",
    "location": "SUMA",
    "tracks": ["SUMA"],"id": "3"}]},]},
    {
    "date": "2022-04-19",
    "groups": [{ "time": "4:00:00 PM",
    "sessions": [ {"name": "Sidekicks Assemble! ",
    "url": "https://www.suu.edu/pva/","timeStart": "4:00:00 PM",
    "timeEnd": "6:00:00 PM",
    "location": "SUMA",
    "tracks": ["SUMA"],"id": "4"}]},]},
    {
    "date": "2022-04-20",
    "groups": [{ "time": "4:00:00 PM",
    "sessions": [ {"name": "Wonder Wednesday",
    "url": "https://www.suu.edu/pva/","timeStart": "4:00:00 PM",
    "timeEnd": "6:00:00 PM",
    "location": "SUMA",
    "tracks": ["SUMA"],"id": "5"}]},]},
    ]}

let schedule = localStorage.getItem("SUMAScheduleUpdate")?.slice(0,-1) + "]}" || "{\"schedule\": []}"
    // console.log(schedule)


try{
    SUMASchedule = JSON.parse(schedule)
}catch(err){
    console.log(err)
}
