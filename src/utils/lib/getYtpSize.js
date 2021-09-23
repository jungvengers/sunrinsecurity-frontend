export const getYtpSize = () => {
    let screenX = window.screen.width;
    if (335 <= screenX && screenX < 758)
        return {
            width: '170',
            height: '110',
        };
    else if (758 <= screenX && screenX < 1031)
        return {
            width: '360',
            height: '219',
        };
    else if (1031 <= screenX)
        return {
            width: '500',
            height: '305',
        };
};
