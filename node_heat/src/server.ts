import { serverHTTP } from './app';

const PORT = 4000;

serverHTTP.listen(`${PORT}`, () => console.log(`🔥 Server is running on port ${PORT}`));
