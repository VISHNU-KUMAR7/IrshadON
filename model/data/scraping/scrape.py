import requests

data = requests.get('https://www.imdb.com/chart/top/?ref_=nv_mv_250')
print(data.text)