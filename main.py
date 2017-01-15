import webapp2

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write("Welcome")






application = webapp2.WSGIApplication([('/', MainHandler)
                                       ],
                                       debug=True)




