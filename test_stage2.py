from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector("canvas#gameCanvas")
    page.evaluate("loadStage(2)")
    page.wait_for_timeout(500)

    # move the glass out of the way to ensure laser goes through if glass is hit
    page.evaluate('''
        let cx = cw/2;
        let cy = ch/2;
        lasers[0].setDirection(new Vec2(cx+150, cy+50));

        // try to modify glass angle
        components[0].setAngle(Math.PI / 4);
    ''')
    page.wait_for_timeout(500)

    page.screenshot(path="stage2_glass_rot.png")

    browser.close()
