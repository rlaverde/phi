import cgi
from google.appengine.ext import db

class Xml(db.Model):
  xml_hash = db.IntegerProperty()
  xml_content = db.TextProperty()

print "Content-Type: text/plain\n"

print "#Records: "+str(Xml.all(keys_only=True).count())
print ""
print "from google.appengine.ext import db"
print ""
print "class Xml(db.Model):"
print "  xml_hash = db.IntegerProperty()"
print "  xml_content = db.TextProperty()"
print ""
print "entity_set = []"
print ""

forms = cgi.FieldStorage()

def make_backup():
    
  xml_all = Xml.all(keys_only=True)
  xml_all = xml_all.run()
  
  # id = forms["make_backup"].value
  
  for entity_key in xml_all:
    key_provided = entity_key.name()
    result = db.get(entity_key)
    if not result:
      xml_content = ""
    else:
      xml_content = result.xml_content
      xml_hash    = result.xml_hash
      
      print "temp = {}"
      print "temp['entity_key'] ='"+entity_key.__str__()+"'"
      print "temp['xml_key'] ='"+key_provided+"'"
      print "temp['xml_hash'] ="+str(xml_hash)
      print "temp['xml_content'] = r'''"+xml_content+"'''"
      print "entity_set.append(temp)"
      print '\n'
      
  print 'for entity in entity_set:'
  print "  entity_key = entity['entity_key']"
  print "  xml_key = entity['xml_key']"
  print "  xml_hash = entity['xml_hash']"
  print "  xml_content = entity['xml_content']"

  print '  result = db.get(db.Key.from_path("Xml", xml_key))'
  print '  xml = db.Text(xml_content, encoding="utf_8")'
  print '  row = Xml(key_name = xml_key, xml_hash = xml_hash, xml_content = xml)'
  print '  row.put()'


def load_backup():
  print forms["load_backup"].value
  print '---------------'

if "make_backup" in forms:
  make_backup()

if "load_backup" in forms:
  load_backup()
  