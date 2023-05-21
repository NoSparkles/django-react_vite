import os, pathlib, pynput

os.chdir(pathlib.Path().cwd() / "frontend/react_app")
os.system("npm run build")

keyboard = pynput.keyboard.Controller()
keyboard.type("yes\n")

os.chdir(pathlib.Path().cwd().parent.parent)
os.system("python manage.py collectstatic")
