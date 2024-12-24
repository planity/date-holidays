import { expect } from 'chai'
import Holidays from 'date-holidays'

const currentYear = new Date().getFullYear()
const testYears = [currentYear, currentYear + 1, currentYear + 2]

describe('Holidays Methods Tests for French Overseas Territories', () => {
  let hd
  beforeEach(() => {
    hd = new Holidays()
  })
  testYears.forEach((year) => {
    // ✅ Mainland France (FR) - National Public Holidays
    it(`should return the correct public holidays observed everywhere in France in ${year}`, () => {
      hd.init('FR')
      const holidays = hd.getHolidays(year)

      const publicHolidaysFrance = [
        { date: `${year}-01-01 00:00:00`, name: 'Nouvel An' },
        { date: `${year}-05-01 00:00:00`, name: 'Fête du travail' },
        { date: `${year}-05-08 00:00:00`, name: 'Fête de la Victoire 1945' },
        { date: `${year}-07-14 00:00:00`, name: 'Fête Nationale de la France' },
        { date: `${year}-08-15 00:00:00`, name: 'Assomption' },
        { date: `${year}-11-01 00:00:00`, name: 'Toussaint' },
        { date: `${year}-11-11 00:00:00`, name: 'Armistice 1918' },
        { date: `${year}-12-25 00:00:00`, name: 'Noël' }
      ]

      publicHolidaysFrance.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday, `Holiday on ${expected.date} should exist`).to.exist.and.to.be.an('object')
        expect(holiday.name, `Holiday name should be ${expected.name}`).to.equal(expected.name)
      })
    })
    // ✅ Lundi de Pâques (FR)
    it('should return the correct public holidays "Lundi de Pâques" in 2025', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-04-21 00:00:00', name: 'Lundi de Pâques' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pâques" in 2026', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-04-06 00:00:00', name: 'Lundi de Pâques' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pâques" in 2027', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-03-29 00:00:00', name: 'Lundi de Pâques' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Lundi de Pentecôte (FR)
    it('should return the correct public holidays "Lundi de Pentecôte" in 2025', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-06-09 00:00:00', name: 'Lundi de Pentecôte' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pentecôte" in 2026', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-25 00:00:00', name: 'Lundi de Pentecôte' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Lundi de Pentecôte" in 2027', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-17 00:00:00', name: 'Lundi de Pentecôte' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Ascension (FR)
    it('should return the correct public holidays "Ascension" in 2025', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2025)
      const expectedHoliday = { date: '2025-05-29 00:00:00', name: 'Ascension' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ascension" in 2026', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2026)
      const expectedHoliday = { date: '2026-05-14 00:00:00', name: 'Ascension' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holidays "Ascension" in 2027', () => {
      hd.init('FR')
      const holidays = hd.getHolidays(2027)
      const expectedHoliday = { date: '2027-05-06 00:00:00', name: 'Ascension' }
      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })

    // ✅ Polynésie française (FR-PF)
    it(`should return the correct public holidays for French Polynesia in ${year}`, () => {
      hd.init('FR-PF')

      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-03-05 00:00:00`, name: "Fête de l'Autonomie" }
      ]

      expectedHolidays.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Mayotte (FR-YT)
    it(`should return the correct public holidays for Mayotte in ${year}`, () => {
      hd.init('FR-YT')

      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-04-27 00:00:00`, name: 'Abolition de l’esclavage' }
      ]

      expectedHolidays.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Wallis-et-Futuna (FR-WF)
    it(`should return the correct public holidays for Wallis and Futuna in ${year}`, () => {
      hd.init('FR-WF')

      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-07-29 00:00:00`, name: 'Fête du territoire' },
        { date: `${year}-04-28 00:00:00`, name: 'Saint Pierre Chanel' }
      ]

      expectedHolidays.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Martinique (FR-MQ)
    it(`should return the correct public holidays for Martinique in ${year}`, () => {
      hd.init('FR-MQ')

      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-05-22 00:00:00`, name: 'Abolition de l’esclavage' },
        { date: `${year}-07-21 00:00:00`, name: 'Jour de Victor Schoelcher' }
      ]

      expectedHolidays.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Guadeloupe (FR-GP)
    it(`should return the correct public holidays for Guadeloupe in ${year}`, () => {
      hd.init('FR-GP')

      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-05-27 00:00:00`, name: 'Abolition de l’esclavage' }
      ]

      expectedHolidays.forEach((expected) => {
        const holiday = holidays.find((h) => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Guyane française (FR-GF)
    it(`should return the correct public holidays for French Guiana in ${year}`, () => {
      hd.init('FR-GF')
      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-06-10 00:00:00`, name: 'Abolition de l’esclavage' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Saint-Barthélemy (FR-BL)
    it(`should return the correct public holidays for Saint Barthelemy in ${year}`, () => {
      hd.init('FR-BL')
      const holidays = hd.getHolidays(year)

      const expectedHolidays = [
        { date: `${year}-10-09 00:00:00`, name: 'Abolition de l’esclavage' }
      ]

      expectedHolidays.forEach(expected => {
        const holiday = holidays.find(h => h.date === expected.date)
        expect(holiday).to.exist.and.to.be.an('object')
        expect(holiday.name).to.equal(expected.name)
      })
    })

    // ✅ Alsace et Moselle (FR-57, FR-67, FR-68) - Lendemain de Noël
    it(`should return the correct public holiday for the 26th of December (Lendemain de Noël) in Alsace and Moselle in ${year}`, () => {
      hd.init('FR-57')
      const moselleHolidays = hd.getHolidays(year)

      hd.init('FR-67')
      const basRhinHolidays = hd.getHolidays(year)

      hd.init('FR-68')
      const hautRhinHolidays = hd.getHolidays(year)

      const holidays = [...moselleHolidays, ...basRhinHolidays, ...hautRhinHolidays]

      const expectedHoliday = { date: `${year}-12-26 00:00:00`, name: 'Lendemain de Noël' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    // ✅ Alsace et Moselle (FR-57, FR-67, FR-68) - Vendredi saint
    it('should return the correct public holiday for Good Friday (Vendredi saint) in Alsace and Moselle in  2025', () => {
      hd.init('FR-57')
      const moselleHolidays = hd.getHolidays(2025)

      hd.init('FR-67')
      const basRhinHolidays = hd.getHolidays(2025)

      hd.init('FR-68')
      const hautRhinHolidays = hd.getHolidays(2025)

      const holidays = [...moselleHolidays, ...basRhinHolidays, ...hautRhinHolidays]

      const expectedHoliday = { date: '2025-04-18 00:00:00', name: 'Vendredi saint' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holiday for Good Friday (Vendredi saint) in Alsace and Moselle in  2026', () => {
      hd.init('FR-57')
      const moselleHolidays = hd.getHolidays(2026)

      hd.init('FR-67')
      const basRhinHolidays = hd.getHolidays(2026)

      hd.init('FR-68')
      const hautRhinHolidays = hd.getHolidays(2026)

      const holidays = [...moselleHolidays, ...basRhinHolidays, ...hautRhinHolidays]

      const expectedHoliday = { date: '2026-04-03 00:00:00', name: 'Vendredi saint' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
    it('should return the correct public holiday for Good Friday (Vendredi saint) in Alsace and Moselle in  2027', () => {
      hd.init('FR-57')
      const moselleHolidays = hd.getHolidays(2027)

      hd.init('FR-67')
      const basRhinHolidays = hd.getHolidays(2027)

      hd.init('FR-68')
      const hautRhinHolidays = hd.getHolidays(2027)

      const holidays = [...moselleHolidays, ...basRhinHolidays, ...hautRhinHolidays]

      const expectedHoliday = { date: '2027-03-26 00:00:00', name: 'Vendredi saint' }

      const holiday = holidays.find(h => h.date === expectedHoliday.date)

      expect(holiday).to.exist.and.to.be.an('object')
      expect(holiday.name).to.equal(expectedHoliday.name)
    })
  })
})
