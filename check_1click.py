import urllib.request
username = "dhruvv16-hash"
repo = "1-CLICK"
url = f"https://api.github.com/repos/{username}/{repo}/readme"
try:
    import json
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        
        req2 = urllib.request.Request(data['download_url'], headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req2) as resp2:
            print(resp2.read().decode('utf-8'))
except Exception as e:
    print(e)
