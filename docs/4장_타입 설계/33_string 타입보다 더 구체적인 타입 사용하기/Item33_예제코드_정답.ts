/**이 녹음은 어떤 환경에서 이루어졌는지? */
type 녹음유형 = 'Studio' | 'live';

interface 앨범 {
  가수 : string;
  제목 : string;
  발매년도 : number;
  녹음_유형 : 녹음유형;
}

const kindOfBlue : 앨범 = {
  가수: 'Miles Davis',
  제목: 'Kind of Blue',
  발매년도: 1999,  
  녹음_유형: 'Studio', 
}; 

const E:앨범 = {
  가수 : "BIGBANG",
  제목 : "우리 사랑하지 말아요",
  발매년도: 2015,
  녹음_유형: "live"
}

const 조각집:앨범 = {
  가수 : "아이유",
  제목 : "드라마",
  발매년도 : 2021,
  녹음_유형: "Studio"
}

const albums: 앨범[] = [kindOfBlue, E, 조각집] 


function 원하는_key에_대한_value추출<T, K extends keyof T>(albums : T[] , key: K): T[K][] {
  return albums.map(album => album[key])
} 

console.log(원하는_key에_대한_value추출(albums, "가수")) 
console.log(원하는_key에_대한_value추출(albums, "발매년도")) 
