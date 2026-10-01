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

    # move the laser pointing down somewhat
    page.evaluate('''
        let cx = cw/2;
        let cy = ch/2;
        lasers[0].setDirection(new Vec2(cx+150, cy+50));
    ''')
    page.wait_for_timeout(500)

    state = page.evaluate("state")
    if state == "end":
        print("Success!")
    else:
        print("Failed to win")

    page.screenshot(path="stage2_manual.png")

    browser.close()
