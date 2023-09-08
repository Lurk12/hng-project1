
const { StatusCodes } = require("http-status-codes");

function createResponse(slack_name, currentDay, currentTime, track, githubFileUrl, githubSourceUrl) {
    return {
        "Slack Name": slack_name,
        "Current Day of the Week": currentDay,
        "Current UTC Time": currentTime,
        "track": track,
        "Github File URL": githubFileUrl,
        "Github Repo URL": githubSourceUrl,
        "Status Code": StatusCodes.OK
    };
}

module.exports = {
    createResponse
};
