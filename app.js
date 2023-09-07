const express = require('express');
const app = express();
const {StatusCodes} = require('http-status-codes')

const {createResponse} = require('./response')

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
try {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];
    // console.log(currentDay);

    const currentUtcTime = new Date();
    currentUtcTime.setMinutes(currentUtcTime.getMinutes() - 2); // Subtract 2 minutes for validation
    const isoString = currentUtcTime.toISOString();


    const isoParts = isoString.split('T')

    const currentTime = isoParts.join(' ');
    // console.log(currentTime);

    // Define GitHub URLs
    const githubFileUrl = 'https://https://github.com/Lurk12/Date-And-Time-API'
    const githubSourceUrl = 'https://https://github.com/Lurk12/Date-And-Time-API.git'
    

    const response = createResponse(slackName, currentDay, currentTime, track, githubFileUrl, githubSourceUrl);

    res.status(StatusCodes.OK).json(response);
    console.log(response);

} catch (error) {
    console.log(error);
}
  
})
const port = process.env.PORT || 2000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}. . .`);
})



