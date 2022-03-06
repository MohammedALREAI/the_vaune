export const getTime = (deadline: number) => {
    const time = deadline - Date.parse(new Date() + "");
    if (time < 0) {
        return {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
        };
    } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        return {
            seconds,
            minutes,
            hours,
            days,
        };
    }
};
