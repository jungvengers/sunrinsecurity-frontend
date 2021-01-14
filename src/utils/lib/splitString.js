export const splitParticipants = (names) => {
    if (names.length < 1 || names[0] == ' ') return [];
    const participants = names.split(' ');
    const newNames = [];
    participants.map((name) => {
        switch (name.length) {
            case 2:
                newNames.push(name[0] + 'X');
                break;
            case 3:
                newNames.push(name[0] + 'X' + name[2]);
                break;
            case 4:
                newNames.push(name[0] + 'XX' + name[3]);
                break;
        }
    });
    return newNames;
};

export const splitYoutubeURLs = (urls) => {
    if (urls.length < 1 || urls[0] == ' ') return [];

    const REGEX = /https:\/\/(www\.youtube.com\/watch\?v=|youtu.be\/)(.*)(&|\?)/;
    const youtubeURLs = urls.split(' ');
    const videoId = [];

    youtubeURLs.map((link) => {
        videoId.push(link.match(REGEX)[2]);
    });

    return videoId;
};
