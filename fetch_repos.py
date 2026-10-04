import urllib.request
import json
import re

username = "dhruvv16-hash"
url = f"https://api.github.com/users/{username}/repos?per_page=100"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        repos = json.loads(response.read().decode('utf-8'))
        
        for repo in repos:
            print(f"- {repo['name']} : {repo['html_url']}")
except Exception as e:
    print(f"Error fetching repos: {e}")
