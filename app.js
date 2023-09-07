const express = require('express');
const app = express();
const {StatusCodes} = require('http-status-codes')

const {createResponse} = require('./response')

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name || Lurk;
    const track = req.query.track || Backend;
try {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];
    // console.log(currentDay);

    const currentUtcTime = new Date();
    currentUtcTime.setUTCMinutes(currentUtcTime.getUTCMinutes() - 2); 

    const isoString = currentUtcTime.toISOString();
    

    const isoParts = isoString.split('T')
    const currentTime = isoParts.join(' ');
    // console.log(currentTime);

    
    const githubFileUrl = 'https://github.com/Lurk12/hng-project1'
    const githubSourceUrl = 'https://github.com/Lurk12/hng-project1.git'
    

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



