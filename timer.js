function timeAgo(milliseconds) {
    const seconds = Math.round(milliseconds / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const weeks = Math.round(days / 7);
    const months = Math.round(days / 30);
    const years = Math.round(days / 365);

    switch (true) {
        case (seconds < 60):
            return seconds <= 1 ? "a second ago" : `${seconds} seconds ago`;
        case (minutes < 60):
            return minutes <= 1 ? "a minute ago" : `${minutes} minutes ago`;
        case (hours < 24):
            return hours <= 1 ? "an hour ago" : `${hours} hours ago`;
        case (days < 7):
            return days <= 1 ? "a day ago" : `${days} days ago`;
        case (weeks < 4):
            return weeks <= 1 ? "a week ago" : `${weeks} weeks ago`;
        case (months < 12):
            return months <= 1 ? "a month ago" : `${months} months ago`;
        default:
            return years <= 1 ? "a year ago" : `${years} years ago`;
    }
}


console.log(timeAgo(5000));        
console.log(timeAgo(3600000));     
console.log(timeAgo(86400000));    
