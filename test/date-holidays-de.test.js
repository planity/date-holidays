import { expect } from 'chai'
import Holidays from 'date-holidays'

const currentYear = new Date().getFullYear()
const testYears = [currentYear, currentYear + 1, currentYear + 2]

describe('Holidays Methods Tests for German Overseas Territories', () => {
  let hd
  beforeEach(() => {
    hd = new Holidays()
  })
  testYears.forEach((year) => {
    // ✅ German (DE) - National Public Holidays
    it(`should return the correct public holidays observed everywhere in German in ${year}`, () => {
      hd.init('DE')
      const holidays = hd.getHolidays(year)

      const publicHolidaysGerman = [
        { date: `${year}-01-01 00:00:00`, name: 'Neujahr' },
        { date: `${year}-05-01 00:00:00`, name: 'Maifeiertag' },
        { date: `${year}-10-03 00:00:00`, name: 'Tag der Deutschen Einheit' },
        { date: `${year}-11-01 00:00:00`, name: 'Allerheiligen' },
        { date: `${year}-12-25 00:00:00`, name: '1. Weihnachtstag' },
        { date: `${year}-12-26 00:00:00`, name: '2. Weihnachtstag' }
      ]

      publicHolidaysGerman.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday, `Holiday on ${expected.date} should exist`).to.exist.and.to.be.an('object')
        expect(holiday.name, `Holiday name should be ${expected.name}`).to.equal(expected.name)
      })
    })
    // ✅ Karfreitag (DE)
    it('should return the correct public holidays "Karfreitag" in 2025', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-04-18 00:00:00', name: 'Karfreitag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Karfreitag" in 2026', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-04-03 00:00:00', name: 'Karfreitag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Karfreitag" in 2027', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-03-26 00:00:00', name: 'Karfreitag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Ostersonntag (DE)
    it('should return the correct public holidays "Ostersonntag" in 2025', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-04-20 00:00:00', name: 'Ostersonntag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ostersonntag" in 2026', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-04-05 00:00:00', name: 'Ostersonntag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ostersonntag" in 2027', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-03-28 00:00:00', name: 'Ostersonntag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Ostermontag (DE)
    it('should return the correct public holidays "Ostermontag" in 2025', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-04-21 00:00:00', name: 'Ostermontag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ostermontag" in 2026', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-04-06 00:00:00', name: 'Ostermontag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ostermontag" in 2027', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-03-29 00:00:00', name: 'Ostermontag' }
      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Christi Himmelfahrt (DE)
    it('should return the correct public holidays "Christi Himmelfahrt" in 2025', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-05-29 00:00:00', name: 'Christi Himmelfahrt' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Christi Himmelfahrt" in 2026', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-14 00:00:00', name: 'Christi Himmelfahrt' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Christi Himmelfahrt" in 2027', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-06 00:00:00', name: 'Christi Himmelfahrt' }
      const holiday = holidays.find(h => h.date === expectedHoliday.date)
      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Pfingstsonntag (DE)
    it('should return the correct public holidays "Pfingstsonntag" in 2025', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-06-08 00:00:00', name: 'Pfingstsonntag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Pfingstsonntag" in 2026', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-24 00:00:00', name: 'Pfingstsonntag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Pfingstsonntag" in 2027', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-16 00:00:00', name: 'Pfingstsonntag' }
      const holiday = holidays.find(h => h.date === expectedHoliday.date)
      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Pfingstmontag (DE)
    it('should return the correct public holidays "Pfingstmontag" in 2025', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-06-09 00:00:00', name: 'Pfingstmontag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Pfingstmontag" in 2026', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-25 00:00:00', name: 'Pfingstmontag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Pfingstmontag" in 2027', () => {
      hd.init('DE')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-17 00:00:00', name: 'Pfingstmontag' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Fronleichnam (DE)
    it('should return the correct public holidays "Fronleichnam" in 2025', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-06-19 00:00:00', name: 'Fronleichnam' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Fronleichnam" in 2026', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-06-04 00:00:00', name: 'Fronleichnam' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Fronleichnam" in 2027', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-27 00:00:00', name: 'Fronleichnam' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Buß- und Bettag (DE-SN)
    it('should return the correct public holidays for Saint Buß- und Bettag in 2025', () => {
      hd.init('DE-SN')
      const holidays = hd.getHolidays(2025)

      const expectedHolidays = [
        { date: '2025-11-19 00:00:00', name: 'Buß- und Bettag' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
    it('should return the correct public holidays for Saint Buß- und Bettag in 2026', () => {
      hd.init('DE-SN')
      const holidays = hd.getHolidays(2026)

      const expectedHolidays = [
        { date: '2026-11-18 00:00:00', name: 'Buß- und Bettag' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
    it('should return the correct public holidays for Saint Buß- und Bettag in 2027', () => {
      hd.init('DE-SN')
      const holidays = hd.getHolidays(2027)

      const expectedHolidays = [
        { date: '2027-11-17 00:00:00', name: 'Buß- und Bettag' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
    // ✅ Heilige Drei Könige (DE-BW)
    it('should return the correct public holidays for Heilige Drei Könige in 2025', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2025)

      const expectedHolidays = [
        { date: '2025-01-06 00:00:00', name: 'Heilige Drei Könige' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
    it('should return the correct public holidays for Heilige Drei Könige in 2026', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2026)

      const expectedHolidays = [
        { date: '2026-01-06 00:00:00', name: 'Heilige Drei Könige' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
    it('should return the correct public holidays for Heilige Drei Könige in 2027', () => {
      hd.init('DE-BW')
      const holidays = hd.getHolidays(2027)

      const expectedHolidays = [
        { date: '2027-01-06 00:00:00', name: 'Heilige Drei Könige' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
    // ✅ Internationaler Frauentag (DE-BE)
    it(`should return the correct public holidays for  Internationaler Frauentag in ${year}`, () => {
      hd.init('DE-BE')
      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-03-08 00:00:00`, name: 'Internationaler Frauentag' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })
  })
})
