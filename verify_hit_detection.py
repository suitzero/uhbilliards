from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    page.wait_for_selector("canvas#gameCanvas")
    page.evaluate("loadStage(1)")
    page.wait_for_timeout(500)

    # Zoom out
    page.mouse.move(500, 500)
    page.mouse.wheel(0, 1000)
    page.wait_for_timeout(500)

    # Try to rotate mirror
    # Endpoints are p1, p2

    pos_screen = page.evaluate("""
        (() => {
            let comp = components[0];
            return {
                x: comp.p1.x * camera.zoom + camera.x,
                y: comp.p1.y * camera.zoom + camera.y
            }
        })()
    """)

    # Click near edge for rotation
    page.mouse.move(pos_screen['x'], pos_screen['y'])
    page.mouse.down()
    page.mouse.move(pos_screen['x'] + 50, pos_screen['y'] + 50)
    page.mouse.up()

    page.wait_for_timeout(500)
    page.screenshot(path="camera_rotate_after_zoom.png")

    browser.close()
