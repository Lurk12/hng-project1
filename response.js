
const { StatusCodes } = require("http-status-codes");

function createResponse(slackName, currentDay, currentTime, track, githubFileUrl, githubSourceUrl) {
    return {
        "Slack name": slackName,
        "Current day of the week": currentDay,
        "Current UTC time": currentTime,
        "Track": track,
        "Github_file_url": githubFileUrl,
        "github_repo_url": githubSourceUrl,
        "Status Code": StatusCodes.OK
    };
}

module.exports = {
    createResponse
};
