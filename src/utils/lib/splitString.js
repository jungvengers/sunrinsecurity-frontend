export const splitParticipants = (names) => {
    try {
        if (names.length < 1 || names[0] === ' ') return [];
        const participants = names.split(' ');
        const newNames = [];
        participants.map((name) => {
            if (name.length < 3) newNames.push(name[0] + 'X');
            else newNames.push(name[0] + 'X' + name[name.length - 1]);
        });
        return newNames;
    } catch (error) {
        console.log(error);
    }
};

export const splitYoutubeURLs = (urls) => {
    try {
        if (urls.length < 1 || urls[0] === ' ') return [];

        const REGEX = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const youtubeURLs = urls.split(' ');
        const videoId = [];

        youtubeURLs.map((link) => {
            videoId.push(link.match(REGEX)[7]);
        });

        return videoId;
    } catch (error) {
        console.log(error);
    }
};
