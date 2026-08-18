import { test } from '@playwright/test';
import { chromium, firefox } from 'playwright';

test('Open RedBus in Edge and Flipkart in Firefox', async () => {

    // Open Edge
    const edge = await chromium.launch({
        headless: false,
        channel: 'msedge'
    });

    const edgePage = await edge.newPage();

    await edgePage.goto('https://www.redbus.in');

    console.log("RedBus Title:", await edgePage.title());
    console.log("RedBus URL:", edgePage.url());


    // Open Firefox
    const firefoxBrowser = await firefox.launch({
        headless: false
    });

    const firefoxPage = await firefoxBrowser.newPage();

    await firefoxPage.goto('https://www.flipkart.com');

    console.log("Flipkart Title:", await firefoxPage.title());
    console.log("Flipkart URL:", firefoxPage.url());

});