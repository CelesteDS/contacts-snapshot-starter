const Nightmare = require('nightmare')
const { expect } = require('chai')

describe('Headless Browser Testing w Nightmare', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('7s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('/ (Home Page)', () => {
    it('should load without error', (done) => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000')
        .end()
        .then(result => done())
        .catch(done)
    })
  })

  describe('/contacts/new', () => {
    it('should load without error', (done) => {
      nightmare.goto('http://localhost:3000/contacts/new')
        .end()
        .then(() => done())
    // have a question: above line throws an error if written .then(done) Shouldn't this do the same thing??
        .catch(done)
    })
  })

  describe('New Contact link', () => {
    it('should redirect to new contact page', (done) => {
      nightmare
        .goto('http://localhost:3000')
        .click('[href="/contacts/new"]')
        .wait(3000)
        .end()
        .url()
        .then((result) => {
          expect(result).to.equal('http://localhost:3000/contacts/new')
        })
        .then(() => done())
        .catch(done)
    })
  })

  describe('search', () => {
    it('should redirect to contacts search page', () => {
      return nightmare
        .goto('http://localhost:3000')
        .type('[name=q]', 'Godot')
        .click('[type=submit]')
        .url()
        .end()
        .then(result => {
          return expect(result).to.eql('http://localhost:3000/contacts/search?q=Godot')
        })
    })
  })
})
