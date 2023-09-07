const express = require('express');
const app = express();
const {StatusCodes} = require('http-status-codes')

const {createResponse} = require('./response')

app.get('/api', (req, res) => {
    const defaultSlackName = 'Lurk';
    const defaultTrack = 'Backend'; 

    const slack_name = req.query.slackName || defaultSlackName;
    const track = req.query.track || defaultTrack;
try {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];
    // console.log(currentDay);

    const currentUtcTime = new Date();
    currentUtcTime.setMinutes(currentUtcTime.getMinutes() - 2); // Subtract 2 minutes for validation
    const currentTime = currentUtcTime.toISOString();
    // console.log(currentTime);

    
    const githubFileUrl = 'https://github.com/Lurk12/hng-project1'
    const githubSourceUrl = 'https://github.com/Lurk12/hng-project1.git'
    

    const response = createResponse(slack_name, currentDay, currentTime, track, githubFileUrl, githubSourceUrl);

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



