const CampusData = [
  {
    name: '한양대학교 ERICA캠퍼스',
    lat: 37.299920,
    lon: 126.837139,
    // 37.299920, 126.837139
    regex1: [/한양/],
    regex2: [/에리카/,/erica/,/ERICA/]
  },
  {
    name: '한양대학교 서울캠퍼스',
    lat: 37.5578,
    lon: 127.0421,
    regex1: [/한양/],
    regex2: [/서울/]
  }
]

export default CampusData;