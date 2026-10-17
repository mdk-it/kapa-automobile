"""
KAPA Automobile - Mobile.de Fahrzeugbilder Synchronisation
-----------------------------------------------------------
Dieses Skript laedt automatisch hochaufloesende Fahrzeugbilder von mobile.de
herunter und speichert sie lokal im Webseiten-Ordner `assets/images/cars/<slug>/`.

Verwendung:
    python scripts/sync_mobile_de.py
"""

import os
import sys
import json
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CARS_DIR = os.path.join(BASE_DIR, 'assets', 'images', 'cars')

# Aktuelle Fahrzeuge und deren mobile.de Inserat-IDs
VEHICLES = {
    'vw-up': {
        'id': '48640093369184',
        'title': 'Volkswagen move up!',
        'url': 'https://suchen.mobile.de/fahrzeuge/details.html?id=48640093369184'
    },
    'hyundai-i30': {
        'id': '49285157850720',
        'title': 'Hyundai i30 Style',
        'url': 'https://suchen.mobile.de/fahrzeuge/details.html?id=49285157850720'
    },
    'skoda-citigo': {
        'id': '48268359651136',
        'title': 'Skoda Citigo FUN',
        'url': 'https://suchen.mobile.de/fahrzeuge/details.html?id=48268359651136'
    },
    'opel-adam': {
        'id': '46116543481024',
        'title': 'Opel Adam Rocks',
        'url': 'https://suchen.mobile.de/fahrzeuge/details.html?id=46116543481024'
    }
}

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'de-DE,de;q=0.9,en;q=0.8'
}

def download_image(args):
    url, dest_path = args
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        return True
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as resp, open(dest_path, 'wb') as f:
            f.write(resp.read())
        return True
    except Exception as e:
        print(f"Fehler beim Download von {url}: {e}")
        return False

def sync_vehicle(slug, image_urls):
    folder = os.path.join(CARS_DIR, slug)
    os.makedirs(folder, exist_ok=True)
    
    tasks = []
    for idx, url in enumerate(image_urls, 1):
        dest = os.path.join(folder, f"{idx}.jpg")
        tasks.append((url, dest))
        
    print(f"[{slug}] Lade {len(tasks)} Bilder herunter...")
    with ThreadPoolExecutor(max_workers=6) as ex:
        results = list(ex.map(download_image, tasks))
        
    success_count = sum(1 for r in results if r)
    print(f"[{slug}] Fertig: {success_count}/{len(tasks)} Bilder erfolgreich gespeichert.")
    return success_count

def main():
    print("==================================================")
    print(" KAPA Automobile - mobile.de Bild-Synchronisation ")
    print("==================================================")
    
    scraped_cache = os.path.join(BASE_DIR, 'scripts', 'scraped_images.json')
    if not os.path.exists(scraped_cache):
        scraped_cache = os.path.join(BASE_DIR, 'scraped_images.json')
    if os.path.exists(scraped_cache):
        with open(scraped_cache, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        id_to_slug = {v['id']: k for k, v in VEHICLES.items()}
        for car_id, urls in data.items():
            slug = id_to_slug.get(car_id, car_id)
            sync_vehicle(slug, urls)
            
        print("\nAlle Bilder sind lokal auf der Webseite unter assets/images/cars/ gesichert!")
    else:
        print("Keine Cache-Datei gefunden.")

if __name__ == '__main__':
    main()
