import os
from functools import partial
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Serve this folder over http://127.0.0.1:8420
# Avoids the sandbox os.getcwd() failure that `python3 -m http.server` hits.
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIRECTORY)

handler = partial(SimpleHTTPRequestHandler, directory=DIRECTORY)
httpd = HTTPServer(("127.0.0.1", 8420), handler)
print(f"Serving {DIRECTORY} at http://127.0.0.1:8420", flush=True)
httpd.serve_forever()
