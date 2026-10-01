from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector("canvas#gameCanvas")
    page.evaluate("loadStage(2)")
    page.wait_for_timeout(500)

    # Just force the ray to hit the detector
    # Laser is at cx-150, cy-50
    # Detector is at cx+150, cy+50
    # Let's rotate the laser directly!
    # Laser direction:
    page.evaluate('''
        let cx = cw/2;
        let cy = ch/2;
        lasers[0].setDirection(new Vec2(cx+150, cy+50));
        components = []; // remove glass
    ''')
    page.wait_for_timeout(500)

    state = page.evaluate("state")
    intensity = page.evaluate("detectors[0].detectedIntensity")
    print(f"State: {state}, Intensity: {intensity}")

    browser.close()
