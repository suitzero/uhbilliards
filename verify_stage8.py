import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 720})
        await page.goto("http://localhost:8080")

        # Go to stage 8
        await page.evaluate("loadStage(8);")
        await page.wait_for_timeout(500)

        # Click the laser at l1 (cx - 200, cy) -> (1280/2 - 200, 720/2) = (440, 360)
        await page.mouse.click(440, 360)
        await page.wait_for_timeout(500)

        await page.screenshot(path="/home/jules/verification/screenshots/stage8_clicked.png")

        await browser.close()

asyncio.run(main())
