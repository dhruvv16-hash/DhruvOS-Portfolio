import urllib.request
import json
import re

repos = [
    "VendorOS",
    "InvestorGPT",
    "Accident-0-AI",
    "DeltaBridge",
    "1-CLICK",
    "EMAIL_WRITER-AI"
]

username = "dhruvv16-hash"

for repo in repos:
    print(f"\n=== {repo} ===")
    url = f"https://api.github.com/repos/{username}/{repo}/readme"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            download_url = data['download_url']
            
            req2 = urllib.request.Request(download_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2) as resp2:
                readme_content = resp2.read().decode('utf-8')
                
                # Extract markdown images ![alt](url)
                images = re.findall(r'!\[.*?\]\((.*?)\)', readme_content)
                # Extract HTML images <img src="url"
                images += re.findall(r'<img.*?src="(.*?)".*?>', readme_content)
                
                print("Images found:")
                for img in images:
                    if not img.startswith("http"):
                        img = f"https://raw.githubusercontent.com/{username}/{repo}/main/{img}"
                    print(f"  - {img}")
                
                if not images:
                    print("  No images found.")
                
    except Exception as e:
        print(f"Error fetching README for {repo}: {e}")
