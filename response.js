const { StatusCodes } = require("http-status-codes");

function createResponse(slackName, currentDay, currentTime, track, githubFileUrl, githubSourceUrl) {
    return {
        "slack_name": slackName,
        "current_day": currentDay,
        "utc_time": currentTime,
        "track": track,
        "github_file_url": githubFileUrl,
        "github_repo_url": githubSourceUrl,
        "status_code": StatusCodes.OK 
    };
}

module.exports = {
    createResponse
};
