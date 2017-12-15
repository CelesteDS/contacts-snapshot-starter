const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
chai.use(chaiHttp)

/** A test for the / GET route to make sure that the correct page is getting rendered and all the contacts are being received from the database
A test for the /contacts/new GET route that checks that the correct page is rendered
A test for the /contacts POST route that saves contact data to the database
A test for the /contacts/:contactId GET route that makes sure the correct data is returned
A test for the /contacts/:contactId DELETE route that makes sure the correct data is deleted
A test for the /search GET route that checks that the search is returning the correct data and rendering the correct page
*/
describe('End to End testing w chai-http', function () {
  it('goes to home page', function () {
    return chai.request('http://localhost:3000')
    .get('/')
    .then(function (res) {
      expect(res).to.have.status(200)
    })
  })
})
