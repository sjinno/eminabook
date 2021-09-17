//##### API calls
// Popular anime
// https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1
export const popularAnimeUri = (): string =>
    encodeURI(
        'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1',
    );

// Search anime
// https://api.jikan.moe/v3/search/anime?q={anime title}

// Upcoming anime
// https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&status=upcoming
export const upcomingAnimeUri = (): string =>
    encodeURI(
        'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&status=upcoming',
    );

// New anime
// https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&start_date=2021-08-16&end_date=2021-09-16
export const newAnimeUri = (): string => {
    const startDate = '2021-08-16';
    const endDate = '2021-09-16';
    return encodeURI(
        `https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&start_date=${startDate}&end_date=${endDate}`,
    );
};

// R rated anime
// https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&rated=pg13
//#####
