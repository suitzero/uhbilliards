from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector("canvas#gameCanvas")
    page.evaluate("loadStage(1)")
    page.wait_for_timeout(500)

    # Zoom out significantly
    page.mouse.move(500, 500)
    page.mouse.wheel(0, 5000)
    page.wait_for_timeout(500)

    # Get window center (approx where mirror is)
    window_size = page.evaluate("() => ({cw: cw, ch: ch})")
    cx = window_size['cw'] / 2
    cy = window_size['ch'] / 2

    # Try to drag the mirror
    # Since we zoomed out, the mirror visually moved towards the center from wherever the mouse was.
    # Actually, we zoomed around 500, 500. So the mirror is in a different screen position now.

    # Let's get the mirror's screen position
    pos_screen = page.evaluate("""
        (() => {
            let comp = components[0];
            return {
                x: comp.pos.x * camera.zoom + camera.x,
                y: comp.pos.y * camera.zoom + camera.y
            }
        })()
    """)

    print(pos_screen)

    # Drag it
    page.mouse.move(pos_screen['x'], pos_screen['y'])
    page.mouse.down()
    page.mouse.move(pos_screen['x'] + 100, pos_screen['y'] + 100)
    page.mouse.up()

    page.wait_for_timeout(500)
    page.screenshot(path="camera_drag_after_zoom.png")

    browser.close()
