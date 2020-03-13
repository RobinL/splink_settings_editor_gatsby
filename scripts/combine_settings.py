import json

import os

files = os.listdir("../src/data/")


files = [f for f in files if f != "all_example_settings.js"]
d = {}
for p in files:
    with open(os.path.join('../src/data', p)) as f:
        j = json.load(f)
        d[j["settings_id"]] = j

with open(os.path.join("../src/data", "all_example_settings.js"), "w") as f:
    json.dump(d, f, indent=4)

with open(os.path.join("../src/data", "all_example_settings.js"), "r") as f:
    lines = f.readlines()

lines[0] = 'export default {\n'

with open(os.path.join("../src/data", "all_example_settings.js"), "w") as f:
    f.writelines(lines)
