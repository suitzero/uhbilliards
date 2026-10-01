from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector("canvas#gameCanvas")

    page.evaluate("loadStage(2)")

    page.wait_for_timeout(500)

    window_size = page.evaluate("() => ({cw: cw, ch: ch})")
    cw = window_size['cw']
    ch = window_size['ch']
    cx = cw / 2
    cy = ch / 2

    # Let's rotate glass to bend light into detector.
    # Laser is at (cx-150, cy-50) pointing right.
    # Glass is at (cx, cy) width 150 angle pi/2.
    # Detector is at (cx+150, cy+50).

    # Try different angles
    for dx in range(-80, 80, 20):
        page.mouse.move(cx, cy - 75)
        page.mouse.down()
        page.mouse.move(cx + dx, cy - 75)
        page.mouse.up()

        page.wait_for_timeout(200)

        state = page.evaluate("state")
        if state == "end":
            print(f"Success! Game state is end at dx={dx}")
            page.screenshot(path="stage2_success.png")
            break

    browser.close()
