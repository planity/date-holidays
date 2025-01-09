import { expect } from 'chai'
import Holidays from 'date-holidays'

const currentYear = new Date().getFullYear()
const testYears = [currentYear, currentYear + 1, currentYear + 2]

describe('Holidays Methods Tests for Belgium Overseas Territories', () => {
  let hd
  beforeEach(() => {
    hd = new Holidays()
  })
  testYears.forEach((year) => {
    // ✅ Belgium  (BE) - National Public Holidays
    it(`should return the correct public holidays observed everywhere in Belgium in ${year}`, () => {
      hd.init('BE')
      const holidays = hd.getHolidays(year)

      const publicHolidaysBelgium = [
        { date: `${year}-01-01 00:00:00`, name: 'Nouvel An' },
        { date: `${year}-05-01 00:00:00`, name: 'Fête du travail' },
        { date: `${year}-07-21 00:00:00`, name: 'Fête nationale' },
        { date: `${year}-08-15 00:00:00`, name: 'Assomption' },
        { date: `${year}-11-01 00:00:00`, name: 'Toussaint' },
        { date: `${year}-11-11 00:00:00`, name: 'Armistice' },
        { date: `${year}-12-25 00:00:00`, name: 'Noël' }
      ]

      publicHolidaysBelgium.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday, `Holiday on ${expected.date} should exist`).to.exist.and.to.be.an('object')
        expect(holiday.name, `Holiday name should be ${expected.name}`).to.equal(expected.name)
      })
    })
    // ✅ Lundi de Pâques (BE)
    it('should return the correct public holidays "Lundi de Pâques" in 2025', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-04-21 00:00:00', name: 'Lundi de Pâques' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pâques" in 2026', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-04-06 00:00:00', name: 'Lundi de Pâques' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pâques" in 2027', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-03-29 00:00:00', name: 'Lundi de Pâques' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Lundi de Pentecôte (BE)
    it('should return the correct public holidays "Lundi de Pentecôte" in 2025', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-06-09 00:00:00', name: 'Lundi de Pentecôte' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pentecôte" in 2026', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-25 00:00:00', name: 'Lundi de Pentecôte' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pentecôte" in 2027', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-17 00:00:00', name: 'Lundi de Pentecôte' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Ascension (BE)
    it('should return the correct public holidays "Ascension" in 2025', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-05-29 00:00:00', name: 'Ascension' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ascension" in 2026', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-14 00:00:00', name: 'Ascension' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ascension" in 2027', () => {
      hd.init('BE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-06 00:00:00', name: 'Ascension' }
      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
  })
})
