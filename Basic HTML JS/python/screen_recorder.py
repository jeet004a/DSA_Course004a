import cv2
import numpy as np
import pyautogui
import geocoder
import pyaudio
import wave
import threading
import tkinter as tk
from tkinter import messagebox
from pynput import mouse, keyboard

# Global variables
recording = False
audio_stream = None
audio_frames = []
out = None

# Video settings
screen_width, screen_height = pyautogui.size()
fourcc = cv2.VideoWriter_fourcc(*"XVID")
video_filename = "screen_recording.avi"
fps = 10.0

# Audio settings
audio_filename = "audio_recording.wav"
chunk = 1024
format = pyaudio.paInt16
channels = 2
rate = 44100

# Initialize audio
audio = pyaudio.PyAudio()

# Mouse and Keyboard Logger
mouse_clicks = []
keystrokes = []

def on_click(x, y, button, pressed):
    if pressed:
        event = f"Mouse clicked at ({x}, {y}) with {button}\n"
        mouse_clicks.append(event)

def on_press(key):
    try:
        event = f"Key pressed: {key.char}\n"
    except AttributeError:
        event = f"Key pressed: {key}\n"
    keystrokes.append(event)

# Start mouse and keyboard listeners
mouse_listener = mouse.Listener(on_click=on_click)
keyboard_listener = keyboard.Listener(on_press=on_press)
mouse_listener.start()
keyboard_listener.start()

# Function to start recording
def start_recording():
    global recording, audio_stream, out, audio_frames
    if recording:
        return  # Prevent multiple instances
    recording = True

    # Initialize video writer
    out = cv2.VideoWriter(video_filename, fourcc, fps, (screen_width, screen_height))

    # Start audio stream
    audio_stream = audio.open(format=format, channels=channels, rate=rate,
                              input=True, frames_per_buffer=chunk)
    audio_frames = []

    # Start threads for screen and audio recording
    screen_thread = threading.Thread(target=record_screen)
    audio_thread = threading.Thread(target=record_audio)
    screen_thread.start()
    audio_thread.start()

    messagebox.showinfo("Recording", "Screen recording started!")

# Function to record screen
def record_screen():
    global recording
    while recording:
        img = pyautogui.screenshot()
        frame = np.array(img)
        frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
        out.write(frame)
        cv2.imshow("Recording", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    cv2.destroyAllWindows()

# Function to record audio
def record_audio():
    global recording
    while recording:
        data = audio_stream.read(chunk)
        audio_frames.append(data)

# Function to stop recording
def stop_recording():
    global recording, out, audio_stream, audio_frames
    if not recording:
        return
    recording = False

    # Stop and save video
    out.release()
    cv2.destroyAllWindows()

    # Stop and save audio
    audio_stream.stop_stream()
    audio_stream.close()

    with wave.open(audio_filename, "wb") as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(audio.get_sample_size(format))
        wf.setframerate(rate)
        wf.writeframes(b"".join(audio_frames))

    # Save keystrokes and mouse logs
    with open("user_input_log.txt", "w") as log_file:
        log_file.writelines(mouse_clicks + keystrokes)

    # Get and save location
    g = geocoder.ip("me")
    location_info = f"Location: {g.latlng}\n"
    with open("location.txt", "w") as loc_file:
        loc_file.write(location_info)

    messagebox.showinfo("Recording Stopped", "Recording saved successfully!")

# Create GUI
root = tk.Tk()
root.title("Screen Recorder")

tk.Label(root, text="Python Screen Recorder", font=("Arial", 14)).pack(pady=10)
start_button = tk.Button(root, text="Start Recording", command=start_recording, font=("Arial", 12), bg="green", fg="white")
start_button.pack(pady=5)
stop_button = tk.Button(root, text="Stop Recording", command=stop_recording, font=("Arial", 12), bg="red", fg="white")
stop_button.pack(pady=5)

root.mainloop()
