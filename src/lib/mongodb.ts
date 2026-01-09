// import { MongoClient } from 'mongodb';

// DB 연결을 비활성화했습니다.
// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

// const uri = process.env.MONGODB_URI;
// let client: MongoClient;
let clientPromise: Promise<any>;

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// DB 연결을 시도하지 않고, 호출 시 빈 객체를 반환하는 더미 Promise를 생성합니다.
// 이를 통해 앱 시작 시 타임아웃을 방지합니다.
const mockClient = {
  db: () => ({
    listCollections: () => ({
      toArray: () => Promise.resolve([])
    })
  })
};

clientPromise = Promise.resolve(mockClient);

export default clientPromise;