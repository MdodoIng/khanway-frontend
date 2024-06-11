export function timeAgo(pastDate: Date): string {
    const now = new Date();
    const difference = now.getTime() - pastDate.getTime();

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 365)
        return `${Math.floor(days / 365)}y ago`;
    else if (days > 30)
        return `${Math.floor(days / 30)}mo ago`;
    else if (days > 0)
        return `${days}d ago`;
    else if (hours > 0)
        return `${hours}h ago`;
    else
        return '방금 전';
}