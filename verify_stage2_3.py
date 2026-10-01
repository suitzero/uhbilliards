from playwright.sync_api import sync_playwright
import math

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

    # Drag center of glass down, then rotate?
    # the light starts at cx-150, cy-50
    # moving the glass center to cx, cy-50
    page.mouse.move(cx, cy)
    page.mouse.down()
    page.mouse.move(cx, cy - 20)
    page.mouse.up()

    # rotate glass
    # original angle pi/2, so endpoints at cx, cy-20-75 and cx, cy-20+75
    # let's try multiple angles
    for dy in range(-75, 75, 10):
        for dx in range(-75, 75, 10):
             page.mouse.move(cx, cy - 20 - 75)
             page.mouse.down()
             page.mouse.move(cx + dx, cy - 20 - 75 + dy)
             page.mouse.up()

             page.wait_for_timeout(50)
             state = page.evaluate("state")
             if state == "end":
                 print(f"Success! dx={dx} dy={dy}")
                 page.screenshot(path="stage2_success.png")
                 break
        if state == "end":
            break

    if state != "end":
        print("Failed to win")
        page.screenshot(path="stage2_failed.png")

    browser.close()
