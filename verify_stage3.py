from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    # Wait for the canvas to load
    page.wait_for_selector("canvas#gameCanvas")

    # Load Stage 3
    page.evaluate("loadStage(3)")

    # Wait a bit for the draw loop to run
    page.wait_for_timeout(1000)

    # Take a screenshot
    page.screenshot(path="/home/jules/verification/screenshots/stage3.png")

    browser.close()
