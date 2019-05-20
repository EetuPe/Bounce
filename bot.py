import pyautogui
import time

def hold_key(key, key2, hold_time):
    start = time.time()
    while time.time() - start < hold_time:
        pyautogui.keyDown(key)
        pyautogui.keyDown(key2)

hold_key('d', 'w', 999)
