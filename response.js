
const { StatusCodes } = require("http-status-codes");

function createResponse(slackName, currentDay, currentTime, track, githubFileUrl, githubSourceUrl) {
    return {
        "Slack name": slackName,
        "Current day of the week": currentDay,
        "Current UTC time": currentTime,
        "Track": track,
        "GitHub URL of the file being run": githubFileUrl,
        "GitHub URL of the full source code": githubSourceUrl,
        "Status Code": StatusCodes.OK
    };
}

module.exports = {
    createResponse
};
