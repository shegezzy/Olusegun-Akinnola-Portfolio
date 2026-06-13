import { NextResponse } from 'next/server';
import { Tweet } from '@/types';

// NOTE: X (Twitter) has heavily restricted their API. 
// To make this fully dynamic, you need an X API Bearer Token.
// You can get one at https://developer.twitter.com/

const TWEETS_CACHE_TIME = 3600; // 1 hour

interface TwitterApiTweet {
    id: string;
    text: string;
    created_at: string;
    public_metrics: {
        like_count: number;
        retweet_count: number;
    };
}

interface TwitterApiResponse {
    data: TwitterApiTweet[];
}

function getErrorMessage(error: unknown) {
    return error instanceof Error ? error.message : 'Unknown error';
}

// Simple in-memory storage for IP rate limiting
// Note: This resets if the server restarts (common in serverless environments)
const ipRequestLog = new Map<string, number>();

export async function GET(request: Request) {
    const bearerToken = process.env.X_BEARER_TOKEN;

    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const lastRequestTime = ipRequestLog.get(ip);

    // If you want to strictly prevent the same IP from even triggering the function block
    // within an hour, we could return early. However, Next.js 'revalidate' already 
    // handles the heavy lifting of not calling X again.

    if (lastRequestTime && (now - lastRequestTime) < TWEETS_CACHE_TIME * 1000) {
        console.log(`IP ${ip} is rate limited. Serving from cache context.`);
    }

    ipRequestLog.set(ip, now);

    if (!bearerToken) {
        // If no token is provided, we return the "dynamic-looking" mock data 
        // or a message explaining how to set it up.
        return NextResponse.json({
            error: "X_BEARER_TOKEN not found in environment variables.",
            setup_instructions: "Add X_BEARER_TOKEN to your .env file to enable live tweets.",
            tweets: [
                {
                    id: '1',
                    text: "Just integrated a new security layer into a Laravel project. Security-first approach isn't just a buzzword, it's a necessity in modern dev. 🛡️ #Laravel #CyberSecurity #WebDev",
                    createdAt: 'Feb 15, 2024',
                    url: 'https://twitter.com/shegezzy',
                    likes: 42,
                    retweets: 12,
                },
                {
                    id: '2',
                    text: "Next.js 14 hydration issues can be tricky! Using 'use client' wisely and handling mounted states is key. Always learning. 🚀 #NextJS #ReactJS #Cloud & Platform Engineering",
                    createdAt: 'Feb 10, 2024',
                    url: 'https://twitter.com/shegezzy',
                    likes: 38,
                    retweets: 8,
                },
                {
                    id: '3',
                    text: "Building scalable APIs with Node.js is all about clean architecture and proper testing. Testing is the safety net every developer needs. 🏗️ #NodeJS #CleanCode #API",
                    createdAt: 'Feb 5, 2024',
                    url: 'https://twitter.com/shegezzy',
                    likes: 56,
                    retweets: 15,
                }
            ]
        });
    }

    try {
        // Replace 'shegezzy' with your target user ID or search query
        // You first need to get the user ID for @shegezzy
        // GET https://api.twitter.com/2/users/by/username/shegezzy

        // Use the ID from env or fallback to a default
        const userId = process.env.NEXT_PUBLIC_TWITTER_ID || "1428751483329126402";

        const response = await fetch(
            `https://api.twitter.com/2/users/${userId}/tweets?tweet.fields=created_at,public_metrics,entities&max_results=5`,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
                next: { revalidate: TWEETS_CACHE_TIME }
            }
        );

        if (!response.ok) {
            throw new Error(`X API responded with ${response.status}`);
        }

        const data: TwitterApiResponse = await response.json();

        const formattedTweets: Tweet[] = data.data.map((tweet) => ({
            id: tweet.id,
            text: tweet.text,
            createdAt: new Date(tweet.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            url: `https://twitter.com/shegezzy/status/${tweet.id}`,
            likes: tweet.public_metrics.like_count,
            retweets: tweet.public_metrics.retweet_count,
        }));

        return NextResponse.json({ tweets: formattedTweets });
    } catch (error: unknown) {
        const message = getErrorMessage(error);
        console.error("Error fetching tweets:", error);
        return NextResponse.json({ error: "Failed to fetch tweets", message }, { status: 500 });
    }
}
