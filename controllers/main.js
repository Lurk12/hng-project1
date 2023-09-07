const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const { createResponse } = require('../response');

router.get('/', (req, res) => {
  const defaultSlackName = 'Lurk';
  const defaultTrack = 'backend';

  const slackName = req.query.slackName || defaultSlackName;
  const track = req.query.track || defaultTrack;

  try {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    const currentUtcTime = new Date();
    currentUtcTime.setMinutes(currentUtcTime.getMinutes() - 2); // Subtract 2 minutes for validation
    const currentTime = currentUtcTime.toISOString();

    const githubFileUrl = 'https://github.com/Lurk12/hng-project1';
    const githubSourceUrl = 'https://github.com/Lurk12/hng-project1.git';

    const response = createResponse(slackName, currentDay, currentTime, track, githubFileUrl, githubSourceUrl);

    res.status(StatusCodes.OK).json(response);
    console.log(response);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
