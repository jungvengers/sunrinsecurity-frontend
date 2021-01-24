const convertToFieldName = (key) => {
    switch (key) {
        case 'title':
            return '제목';
        case 'participants':
            return '참여자';
        case 'clubs':
            return '소속';
        case 'kinds':
            return '분야';
        case 'isContestWork':
            return '카테고리';
        case 'imageFiles':
            return '파일';
        case 'youtubeURLs':
            return '영상';
        case 'content':
            return '내용';
    }
};

export const formValidation = (data, valKeys) => {
    try {
        for (const [key, value] of Object.entries(data)) {
            if (valKeys.indexOf(key) !== -1) {
                if (value === null) {
                    return [false, convertToFieldName(key)];
                } else if (typeof value === 'object') {
                    if (value.length < 1) return [false, convertToFieldName(key)];
                } else if (typeof value === 'string') {
                    if (value === '') return [false, convertToFieldName(key)];
                }
            }
        }
        return [true, null];
    } catch (err) {
        console.log(err);
    }
};
