from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector("canvas#gameCanvas")
    page.evaluate("loadStage(1)")
    page.wait_for_timeout(500)

    # take initial screenshot
    page.screenshot(path="camera_initial.png")

    # Zoom out
    page.mouse.move(500, 500)
    page.mouse.wheel(0, 1000)
    page.wait_for_timeout(500)

    page.screenshot(path="camera_zoom_out.png")

    # Pan
    page.mouse.down()
    page.mouse.move(600, 600)
    page.mouse.up()
    page.wait_for_timeout(500)

    page.screenshot(path="camera_pan.png")

    browser.close()
