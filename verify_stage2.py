from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    # Wait for the canvas to load
    page.wait_for_selector("canvas#gameCanvas")

    # Load Stage 2
    page.evaluate("loadStage(2)")

    # Wait a bit for the draw loop to run
    page.wait_for_timeout(500)

    # get window size
    window_size = page.evaluate("() => ({cw: cw, ch: ch})")
    cw = window_size['cw']
    ch = window_size['ch']
    cx = cw / 2
    cy = ch / 2

    # we need to rotate the glass to bend the light
    # glass initial position: (cx, cy)
    # let's try to drag its edge to rotate it.
    # glass endpoints are: (cx, cy-75), (cx, cy+75)
    # we'll click on (cx, cy-75) and move it slightly

    page.mouse.move(cx, cy - 75)
    page.mouse.down()
    page.mouse.move(cx - 30, cy - 75)
    page.mouse.up()

    page.wait_for_timeout(500)

    # Take a screenshot
    page.screenshot(path="stage2.png")

    state = page.evaluate("state")
    print(f"Game State: {state}")

    browser.close()
