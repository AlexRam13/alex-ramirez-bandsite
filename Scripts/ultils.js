export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const currentDate = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    return currentMonth + "/" + currentDate + "/" + currentYear;
}