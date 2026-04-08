const players = [
  {
    id: "bob-pettit",
    name: "Bob Pettit",
    position: "Power forward",
    nationality: "United States",
    mvpCount: 2,
    teams: ["St. Louis Hawks"],
    years: [1956, 1959],
    image: ""
  },
  {
    id: "bob-cousy",
    name: "Bob Cousy",
    position: "Point guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Boston Celtics"],
    years: [1957],
    image: ""
  },
  {
    id: "bill-russell",
    name: "Bill Russell",
    position: "Center",
    nationality: "United States",
    mvpCount: 5,
    teams: ["Boston Celtics"],
    years: [1958, 1961, 1962, 1963, 1965],
    image: ""
  },
  {
    id: "wilt-chamberlain",
    name: "Wilt Chamberlain",
    position: "Center",
    nationality: "United States",
    mvpCount: 4,
    teams: ["Philadelphia Warriors", "Philadelphia 76ers"],
    years: [1960, 1966, 1967, 1968],
    image: ""
  },
  {
    id: "oscar-robertson",
    name: "Oscar Robertson",
    position: "Point guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Cincinnati Royals"],
    years: [1964],
    image: ""
  },
  {
    id: "wes-unseld",
    name: "Wes Unseld",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Baltimore Bullets"],
    years: [1969],
    image: ""
  },
  {
    id: "willis-reed",
    name: "Willis Reed",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["New York Knicks"],
    years: [1970],
    image: ""
  },
  {
    id: "kareem-abdul-jabbar",
    name: "Kareem Abdul-Jabbar",
    position: "Center",
    nationality: "United States",
    mvpCount: 6,
    teams: ["Milwaukee Bucks", "Los Angeles Lakers"],
    years: [1971, 1972, 1974, 1976, 1977, 1980],
    image: ""
  },
  {
    id: "dave-cowens",
    name: "Dave Cowens",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Boston Celtics"],
    years: [1973],
    image: ""
  },
  {
    id: "bob-mcadoo",
    name: "Bob McAdoo",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Buffalo Braves"],
    years: [1975],
    image: ""
  },
  {
    id: "bill-walton",
    name: "Bill Walton",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Portland Trail Blazers"],
    years: [1978],
    image: ""
  },
  {
    id: "moses-malone",
    name: "Moses Malone",
    position: "Center",
    nationality: "United States",
    mvpCount: 3,
    teams: ["Houston Rockets", "Philadelphia 76ers"],
    years: [1979, 1982, 1983],
    image: ""
  },
  {
    id: "julius-erving",
    name: "Julius Erving",
    position: "Small forward",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Philadelphia 76ers"],
    years: [1981],
    image: ""
  },
  {
    id: "larry-bird",
    name: "Larry Bird",
    position: "Small forward",
    nationality: "United States",
    mvpCount: 3,
    teams: ["Boston Celtics"],
    years: [1984, 1985, 1986],
    image: ""
  },
  {
    id: "magic-johnson",
    name: "Magic Johnson",
    position: "Point guard",
    nationality: "United States",
    mvpCount: 3,
    teams: ["Los Angeles Lakers"],
    years: [1987, 1989, 1990],
    image: ""
  },
  {
    id: "michael-jordan",
    name: "Michael Jordan",
    position: "Shooting guard",
    nationality: "United States",
    mvpCount: 5,
    teams: ["Chicago Bulls"],
    years: [1988, 1991, 1992, 1996, 1998],
    image: ""
  },
  {
    id: "charles-barkley",
    name: "Charles Barkley",
    position: "Power forward",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Phoenix Suns"],
    years: [1993],
    image: ""
  },
  {
    id: "hakeem-olajuwon",
    name: "Hakeem Olajuwon",
    position: "Center",
    nationality: "Nigeria",
    mvpCount: 1,
    teams: ["Houston Rockets"],
    years: [1994],
    image: ""
  },
  {
    id: "david-robinson",
    name: "David Robinson",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["San Antonio Spurs"],
    years: [1995],
    image: ""
  },
  {
    id: "karl-malone",
    name: "Karl Malone",
    position: "Power forward",
    nationality: "United States",
    mvpCount: 2,
    teams: ["Utah Jazz"],
    years: [1997, 1999],
    image: ""
  },
  {
    id: "shaquille-oneal",
    name: "Shaquille O'Neal",
    position: "Center",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Los Angeles Lakers"],
    years: [2000],
    image: ""
  },
  {
    id: "allen-iverson",
    name: "Allen Iverson",
    position: "Shooting guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Philadelphia 76ers"],
    years: [2001],
    image: ""
  },
  {
    id: "tim-duncan",
    name: "Tim Duncan",
    position: "Power forward",
    nationality: "United States",
    mvpCount: 2,
    teams: ["San Antonio Spurs"],
    years: [2002, 2003],
    image: ""
  },
  {
    id: "kevin-garnett",
    name: "Kevin Garnett",
    position: "Power forward",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Minnesota Timberwolves"],
    years: [2004],
    image: ""
  },
  {
    id: "steve-nash",
    name: "Steve Nash",
    position: "Point guard",
    nationality: "Canada",
    mvpCount: 2,
    teams: ["Phoenix Suns"],
    years: [2005, 2006],
    image: ""
  },
  {
    id: "dirk-nowitzki",
    name: "Dirk Nowitzki",
    position: "Power forward",
    nationality: "Germany",
    mvpCount: 1,
    teams: ["Dallas Mavericks"],
    years: [2007],
    image: ""
  },
  {
    id: "kobe-bryant",
    name: "Kobe Bryant",
    position: "Shooting guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Los Angeles Lakers"],
    years: [2008],
    image: ""
  },
  {
    id: "lebron-james",
    name: "LeBron James",
    position: "Small forward",
    nationality: "United States",
    mvpCount: 4,
    teams: ["Cleveland Cavaliers", "Miami Heat"],
    years: [2009, 2010, 2012, 2013],
    image: ""
  },
  {
    id: "derrick-rose",
    name: "Derrick Rose",
    position: "Point guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Chicago Bulls"],
    years: [2011],
    image: ""
  },
  {
    id: "kevin-durant",
    name: "Kevin Durant",
    position: "Small forward",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Oklahoma City Thunder"],
    years: [2014],
    image: ""
  },
  {
    id: "stephen-curry",
    name: "Stephen Curry",
    position: "Point guard",
    nationality: "United States",
    mvpCount: 2,
    teams: ["Golden State Warriors"],
    years: [2015, 2016],
    image: ""
  },
  {
    id: "russell-westbrook",
    name: "Russell Westbrook",
    position: "Point guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Oklahoma City Thunder"],
    years: [2017],
    image: ""
  },
  {
    id: "james-harden",
    name: "James Harden",
    position: "Shooting guard",
    nationality: "United States",
    mvpCount: 1,
    teams: ["Houston Rockets"],
    years: [2018],
    image: ""
  },
  {
    id: "giannis-antetokounmpo",
    name: "Giannis Antetokounmpo",
    position: "Power forward",
    nationality: "Greece",
    mvpCount: 2,
    teams: ["Milwaukee Bucks"],
    years: [2019, 2020],
    image: ""
  },
  {
    id: "nikola-jokic",
    name: "Nikola Jokić",
    position: "Center",
    nationality: "Serbia",
    mvpCount: 3,
    teams: ["Denver Nuggets"],
    years: [2021, 2022, 2024],
    image: ""
  },
  {
    id: "joel-embiid",
    name: "Joel Embiid",
    position: "Center",
    nationality: "Cameroon",
    mvpCount: 1,
    teams: ["Philadelphia 76ers"],
    years: [2023],
    image: ""
  },
  {
    id: "shai-gilgeous-alexander",
    name: "Shai Gilgeous-Alexander",
    position: "Point guard",
    nationality: "Canada",
    mvpCount: 1,
    teams: ["Oklahoma City Thunder"],
    years: [2025],
    image: ""
  }
];

export default players;