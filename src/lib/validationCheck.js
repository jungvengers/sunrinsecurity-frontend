export const formValidation = (data) => {
    for (const [key, value] of Object.entries(data)) {
        if (value === null) return false;
        switch (typeof value) {
            case 'string':
                if (!value) {
                    console.log(key);
                    return false;
                }
                break;
            case 'object':
                if (value.length <= 0) {
                    console.log(key);
                    return false;
                }
        }
    }
    return true;
};
