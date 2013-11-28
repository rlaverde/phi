import requests
import time
url='http://localhost/backup'
#url='phi.uis.edu.co/backup'

data= {
    'make_backup':'12334421'
    }

current_time = time.strftime("%d-%m %I:%M")
f = open("/root/backups/{}".format(current_time), "w")
f.write(requests.post(url, data=data).text)
f.close





 
