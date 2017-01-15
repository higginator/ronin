import webapp2
import jinja2
import os

template_env=jinja2.Environment(
        loader=jinja2.FileSystemLoader(os.path.dirname(__file__) + '/templates'))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('main.html')
        self.response.out.write(template.render())






application = webapp2.WSGIApplication([('/', MainHandler)
                                       ],
                                       debug=True)




